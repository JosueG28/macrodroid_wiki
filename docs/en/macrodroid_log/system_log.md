# System Log

The **System Log** is MacroDroid's activity diary where all app events are recorded.  
It is essential for troubleshooting and understanding how your automations work. Here’s what you need to know:

---

## 📚 What Gets Recorded  {#what_gets_recorded}

- Trigger activations (e.g., "WiFi connected")  
- Actions performed (e.g., "Notification sent")  
- Constraint checks (e.g., "Battery level constraint passed")  
- Variable changes (e.g., "Variable [v=my_var] updated")  
- Errors and warnings  
- Macro start and end times  

---

## 🔢 Log Levels  {#log_levels}

MacroDroid categorizes entries based on their importance:

| Level       | What It Shows                                                                                     | Use Case                                           |
|-------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------|
| **Detailed** | Every single step (e.g., "Checking constraint: Time between 8:00-9:00")                          | Deep debugging – very detailed                   |
| **Standard** | Key milestones (e.g., "Macro 'Alarm Off' triggered", "Action: Volume set to 0")                 | Daily monitoring (recommended)                   |
| **Warnings** | Non-critical issues, such as misconfigured conditions or invalid parameters in actions           | Review potential problems                         |
| **Errors**   | Critical failures, including incompatibilities (e.g., device lacks resources), missing permissions, action/trigger errors, or internal MacroDroid issues (e.g., cloud backup failed) | Fix broken macros                                 |

---

## 🔍 Filtering the Log  {#filtering_the_log}

Tap the **filter icon** (top-right) to narrow results:

*Filter by:*  
- **Event Types**:  
  - ✅ Triggers  
  - ✅ Actions  
  - ✅ Constraints  
  - ✅ Variables  
- **Macros**:  
  - Show specific macros or **All Macros**  
- **Variables**:  
  - Track individual variables  

---

## 📤 Export & Management Options {#export_&_management_options}

Use the **⋮ menu** (top-right) for:

| Option                   | Description                                           |
|---------------------------|-------------------------------------------------------|
| **Share Log (TXT)**       | Export as plain text – ideal for sharing             |
| **Share Log (HTML)**      | Color-coded formatted report – easier to read        |
| **Clear Log**             | Delete all entries and start fresh                   |
| **Change Text Size**      | Adjust font size (Small → Large)                     |

---

## ⚙️ Advanced: Disabling Logging for Specific Macros  {#disabling_logging_for_specific_macros}

To prevent the log from becoming cluttered with repetitive entries from high-frequency macros (e.g., one that checks battery every minute), you can disable logging entirely for individual macros:

1. Open the macro for editing.
2. In the macro editor, tap the **⋮ (3 dots)** menu in the upper right corner.
3. Look for the **"Allow logging"** toggle and disable it (uncheck) to stop all entries from that macro.

Additionally, in the same menu, you can select **"Show log"** to view only the log entries for this specific macro.

This keeps your log focused on important events without affecting the macro's functionality. Re-enable "Allow logging" when debugging that specific macro.

---

## 💡 Pro Tips  {#pro_tips}

1. **Debugging**: When a macro misbehaves, check the log to see where it failed  
2. **Timestamp**: All entries include the exact execution time  
3. **Color Coding**: Errors (purple), Warnings (orange)  
4. **Avoid Clutter**: Use per-macro disabling for frequent automations to maintain a clean, useful log  

> The log automatically scrolls to show the latest entries – perfect for real-time monitoring!

**Example entry:**  
`[12:30:43]  Invoking macro: Edge Light Notification`  
`[12:30:45]  Notification received`  
`[12:30:47]  Show light on edges`