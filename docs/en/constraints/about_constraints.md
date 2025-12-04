# Introduction to Constraints

## Description
A constraint in MacroDroid is an optional tool that lets you control when a macro or a specific action is allowed to run.  
They are based on conditions that must be met to permit or block the execution of macros and actions.  
Constraints act as “gatekeepers” that check whether it’s the right moment for something to happen, adding conditional logic to your automations.

## When to Use Them
Use constraints to refine how your macros behave and prevent unnecessary or poorly timed executions.  
If a trigger detects *“screen on”*, a constraint could validate that the time is between 8:00 AM and 10:00 PM before activating an action like adjusting brightness or turning on reading mode.  
This prevents the macro from firing at midnight when it wouldn’t make sense.

## Types of Constraints  
MacroDroid offers a wide range of constraints, categorized for convenience:  
- **Device & State:** Battery, airplane mode, screen orientation, etc.  
- **Time & Date:** Day of the week, specific time, intervals.  
- **Location & Connectivity:** Wi-Fi, Bluetooth, geofence, GPS.  
- **Variables & Logic:** Variable value, comparison, regular expressions.  
- **Apps & Events:** App in foreground, notification received, etc.  
- **Advanced Logic:** AND/OR/XOR/NOT to nest complex conditions.  

You can explore them all in the constraint selector when editing a macro.

## Applying Constraints
Constraints can be applied in several ways for greater control:

- **To the entire macro:** In the ‘Constraints’ tab at the bottom. The macro only runs if all constraints are met.
- **To individual triggers:** Select a trigger, tap ‘Add Constraint’. The trigger only counts if the constraint is true.
- **To individual actions:** Select an action, tap ‘Add Constraint’. The action only runs if the constraint is met.

This gives you precision: for example, limit an action to run only if the battery is above 20%.

## Constraint Nesting (Advanced Logic)
For more sophisticated logic, use the **AND/OR/XOR/NOT** constraint.  
Any constraints nested under it will be evaluated using that logic operator. You can nest multiple operators to create complex conditions.

Structure example:

```
│ - Constraint 1 (e.g., Battery > 50%)
│ - OR
│ - Constraint 2 (e.g., Wi-Fi connected)
│ - Constraint 3 (e.g., Bluetooth enabled)
```


In this case, Constraint 1 must be true **AND** at least one of (Constraint 2 **OR** Constraint 3) must be true.

Use this to combine conditions intelligently, such as “Only run if it’s daytime AND (you’re at home OR at work).”

## Key Benefits
- **Precision:** Prevents accidental executions and saves battery/resources.
- **Flexibility:** Combine with triggers and actions for smart automations.
- **Complex Logic:** Nesting allows advanced rules without coding.
- **Efficiency:** Cleaner, safer macros with built-in conditions.

## Important Limitations
- Constraints are optional; without them, the macro runs whenever the trigger fires.
- Logical nesting can get complex; start with simple macros first.
- Some constraints require permissions (e.g., GPS for location).
- They don’t replace “If” conditions in actions; use constraints for global or element-specific control.

## Simple Example: “Notification Only at Home”
- **Trigger:** Low battery (<20%).
- **Action:** Send notification (“Charge your phone”).
- **Constraint:** Location (at home).
- **Result:** The notification appears only when you're at home, avoiding unnecessary alerts elsewhere.

