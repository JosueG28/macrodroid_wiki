---
hide:
  - toc
---

# **Triggers: Starting the Automation**

The core function of **MacroDroid** is to automate tasks on your device — and everything begins with a **Trigger**.  
A Trigger is essentially the **“cause”** or **“event”** that signals MacroDroid to start a **Macro**.

---

## What Is a Trigger?

A **trigger** is an event your device listens for. When that event happens, and the macro is enabled, the actions you defined will run.  
Every macro must have **at least one trigger** — without it, your macro will never start.

**Example:**  
- Trigger: `Charger Connected`  
- Actions: `Show Notification: Charging Started`

If you're new to MacroDroid, think of triggers as the **"WHEN"** part of your automation:  
> “When this happens, do that.”  

[**📜 Go to the full trigger list →**](trigger_list.md)

---

## How Triggers Work

Triggers are continuously monitored by MacroDroid in the background. They operate based on **state changes** or **specific events** occurring on your Android device.

1. **Event Occurrence:** An event happens on your phone (e.g., you plug in the charger, open an app, or reach a specific time).  
2. **MacroDroid Detection:** MacroDroid detects this event through the configured **Trigger**.  
3. **Macro Initiation:** Once the Trigger condition is met, MacroDroid **initiates** the Macro.

---

## Single vs. Multiple Triggers

A Macro can be configured to run with one or more triggers:

- **Single Trigger:**  
  The macro runs when that specific event occurs.

- **Multiple Triggers:**  
  The macro runs when **any** of the listed triggers occur — as long as no **Constraint** prevents it.

**Note:**  
Triggers cannot be combined using **AND logic** (e.g., “Charger Connected AND Headphones Plugged”) because they are instant events — only one can start the macro at a time.

**Workaround:**  
Use **constraints** to limit when a trigger is allowed to fire.

**Example:**  
- Trigger: `Charger Connected`  
- Constraint: `Time of Day: 8:00 AM – 10:00 PM`  
➡ The macro will only run during those hours.

---

Triggers are the **starting point of every MacroDroid automation**.  
Mastering them is key to building powerful and efficient macros — start small, experiment, and soon you’ll automate your Android like a pro.
