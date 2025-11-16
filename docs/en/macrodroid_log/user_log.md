# User Log

The **User Log** in MacroDroid is a customizable activity tracker that records only what *you* choose.  
Unlike the **System Log**, which captures everything running in the background (including system-level details), the User Log focuses solely on the events you decide to log using the **Log Event** action.

This makes it an ideal tool for monitoring key actions, debugging specific issues, or simply maintaining a clean and relevant history of your macros.

---

## 📚 What Gets Recorded  {#what_gets_recorded}

The User Log only includes entries that you explicitly configure.  
You have full control over what is logged and how it is labeled.

- Events triggered by the **Log Event** action  
  *(e.g., “Wi-Fi turned on”, “SMS sent”, “Silent mode activated”)*  
- Optional category tags for organization  
  *(default: **General**, or custom ones like “Battery Alerts”, “Location Triggers”, etc.)*

Each log entry includes:
- A **timestamp**
- Your **custom message**
- The **log level** assigned (explained below)
- The **category** it belongs to

---

## 🔢 Log Levels  {#log_levels}

Log levels help prioritize, organize, and filter entries based on their importance.

| Level       | Description                                      | Best for                        |
|-------------|--------------------------------------------------|---------------------------------|
| Detailed    | Fine-grained information (e.g., “Checking step X”) | Step-by-step debugging          |
| Standard    | General activity (e.g., “Macro ran”)             | Day-to-day tracking             |
| Warnings    | Potential issues (e.g., “Low battery detected”)  | Spotting irregularities         |
| Errors      | Failures (e.g., “Action failed”)                 | Identifying what went wrong     |

You can later filter logs by these levels to focus on what matters most.

---

## 🏷️ User Log Channel  {#user_log_channel}

The **User Log Channel** acts like a category that helps you organize your entries.  
You can define under which “channel” each event is logged, making it easy to filter and search later.

**Channel examples:**
- General
- Battery Alerts
- Location Triggers
- Network Activity
- Custom channels according to your needs

---

## 📤 Export & Management Options  {#export_&_management_options}

From the **⋮ menu** on the User Log screen, you can:

| Option                   | Description                                                  |
|---------------------------|--------------------------------------------------------------|
| Share Log (TXT)           | Export as plain text for easy reading or sharing            |
| Share Log (HTML)          | Export a formatted, color-coded version for visual clarity |
| Clear Log                 | Delete all entries and start fresh                           |
| Change Text Size          | Adjust font size from Small to Large                         |

---

## 💡 Why Use It?  {#why_use_it}

- **Less cluttered** than the System Log — only shows what matters to you  
- **Great for debugging** — isolate a problem by adding strategic log points  
- **Beginner-friendly** — no technical jargon, just custom messages you define  
- **Powerful for experts** — useful for detailed flow analysis and behavior tracking  

It’s like your own custom journal for macro behavior.  
Use it to validate triggers, check if conditions are met, or understand what happened (and when) during macro execution.
