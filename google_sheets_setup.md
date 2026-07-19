# Google Sheets & Apps Script Integration Guide

This guide will walk you through setting up a Google Sheet to store bookings, and creating a Google Apps Script web app that:
1. Stores form submissions in the spreadsheet.
2. Emails the booking details directly to you (the owner).
3. Allows customers to search their booking history on the "My Bookings" page.

---

## Step 1: Create the Google Sheet
1. Open [Google Sheets](https://sheets.google.com) and create a **Blank Spreadsheet**.
2. Rename the spreadsheet to something like `Shine Beauty Bookings`.
3. Set the first row (headers) with the following column names in order (from Column A to J):
   * **A:** Timestamp
   * **B:** Name
   * **C:** Phone
   * **D:** Address
   * **E:** Category
   * **F:** Sub-Service
   * **G:** Date
   * **H:** Time
   * **I:** Status
   * **J:** Notes

---

## Step 2: Open the Apps Script Editor
1. In your Google Sheet menu bar, click on **Extensions** -> **Apps Script**.
2. Delete any code in the editor (clear the default `myFunction`).
3. Paste the following Apps Script code:

```javascript
// Google Apps Script code for Shine Beauty Services

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    var timestamp = new Date();
    var name = data.name || "";
    var phone = data.phone || "";
    var address = data.address || "";
    var category = data.category || "";
    var subService = data.subService || "";
    var date = data.date || "";
    var time = data.time || "";
    var status = data.status || "Pending";
    var notes = data.notes || "";
    
    // Append row to sheet
    sheet.appendRow([timestamp, name, phone, address, category, subService, date, time, status, notes]);
    
    // Send email notification to owner
    sendOwnerEmail(name, phone, address, category, subService, date, time, notes);
    
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
                         .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var rows = sheet.getDataRange().getValues();
    
    // Get search phone number from query parameters
    var searchPhone = e.parameter.phone;
    if (!searchPhone) {
      return ContentService.createTextOutput(JSON.stringify([]))
                           .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Clean phone number (remove non-digits)
    var cleanSearchPhone = searchPhone.replace(/[^\d]/g, "");
    
    var results = [];
    
    // Loop through rows (skip header row 0)
    for (var i = 1; i < rows.length; i++) {
      var rowPhone = String(rows[i][2]);
      var cleanRowPhone = rowPhone.replace(/[^\d]/g, "");
      
      // If phone numbers match
      if (cleanRowPhone === cleanSearchPhone) {
        // Format date row value
        var dateVal = rows[i][6];
        var formattedDate = "";
        if (dateVal instanceof Date) {
          formattedDate = Utilities.formatDate(dateVal, Session.getScriptTimeZone(), "yyyy-MM-dd");
        } else {
          formattedDate = String(dateVal);
        }
        
        results.push({
          category: rows[i][4],
          subService: rows[i][5],
          date: formattedDate,
          time: rows[i][7],
          status: rows[i][8],
          notes: rows[i][9],
          address: rows[i][3]
        });
      }
    }
    
    return ContentService.createTextOutput(JSON.stringify(results))
                         .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendOwnerEmail(name, phone, address, category, subService, date, time, notes) {
  // Get active user's email address (your email)
  var ownerEmail = Session.getActiveUser().getEmail(); 
  
  var subject = "🚨 New Home Salon Booking: " + name;
  
  var htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; border: 1px solid #C4818A; border-radius: 12px; padding: 24px; background-color: #FFF9F9;">
      <h2 style="color: #2D2D2D; font-family: Georgia, serif; border-bottom: 2px solid #D4AF37; padding-bottom: 8px;">New Doorstep Salon Booking! 🌸</h2>
      <p style="font-size: 14px; color: #555;">You have received a new personalized home salon booking request:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #2D2D2D; border-bottom: 1px solid #eee; width: 140px;">Customer Name:</td>
          <td style="padding: 8px 0; color: #555; border-bottom: 1px solid #eee;">\${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #2D2D2D; border-bottom: 1px solid #eee;">Phone Number:</td>
          <td style="padding: 8px 0; color: #555; border-bottom: 1px solid #eee;"><a href="tel:\${phone}">\${phone}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #2D2D2D; border-bottom: 1px solid #eee;">Home Address:</td>
          <td style="padding: 8px 0; color: #555; border-bottom: 1px solid #eee;">\${address}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #2D2D2D; border-bottom: 1px solid #eee;">Services:</td>
          <td style="padding: 8px 0; color: #555; border-bottom: 1px solid #eee; font-weight: bold;">\${subService} (\${category})</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #2D2D2D; border-bottom: 1px solid #eee;">Preferred Date:</td>
          <td style="padding: 8px 0; color: #555; border-bottom: 1px solid #eee;">\${date}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #2D2D2D; border-bottom: 1px solid #eee;">Preferred Time:</td>
          <td style="padding: 8px 0; color: #555; border-bottom: 1px solid #eee;">\${time}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #2D2D2D;">Special Notes:</td>
          <td style="padding: 8px 0; color: #555;">\${notes}</td>
        </tr>
      </table>
      
      <div style="margin-top: 24px; text-align: center;">
        <a href="tel:\${phone}" style="background-color: #C4818A; color: white; padding: 12px 24px; border-radius: 9999px; text-decoration: none; font-weight: bold; display: inline-block;">Call Customer Now</a>
      </div>
    </div>
  `;
  
  MailApp.sendEmail({
    to: ownerEmail,
    subject: subject,
    htmlBody: htmlBody
  });
}
```

---

## Step 3: Deploy the Script as a Web App
To connect your Next.js application to this script, you must deploy it publicly:
1. In the Apps Script editor top right, click **Deploy** -> **New deployment**.
2. Click the gear icon (**Select type**) and choose **Web app**.
3. Fill in the deployment details:
   * **Description:** `Shine Beauty Booking API`
   * **Execute as:** `Me (your-email@gmail.com)`
   * **Who has access:** `Anyone` *(Crucial: This allows your Next.js form code to send requests without requiring users to log into Google)*.
4. Click **Deploy**.
5. Google will ask you to **Authorize Access**. Click **Authorize Access**, log into your Google Account, click **Advanced** (at the bottom of the security warning popup), and choose **Go to Untitled project (unsafe)**. Then click **Allow**.
6. Copy the **Web App URL** generated in the deployment popup. It will look like this:
   `https://script.google.com/macros/s/AKfycb.../exec`

---

## Step 4: Add the URL to Your Project
1. Open your project files on your computer.
2. Open or create the file named `.env.local` in the root folder of your project.
3. Add the Web App URL like this:
   ```env
   NEXT_PUBLIC_SCRIPT_URL=https://script.google.com/macros/s/AKfycb.../exec
   ```
4. Restart your development server (`npm run dev`) or build/deploy your application.

Now, whenever a customer makes a booking:
* It will append instantly to your Google Sheet.
* You will receive a beautiful email notification in your inbox containing their name, number, address, selections, and a quick-tap button to call them back!
