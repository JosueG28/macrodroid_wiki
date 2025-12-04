# Introduction to Actions

## Description {#description}
An action is something your device can do when a macro runs. For a macro to be valid, it must include at least one action.  
Actions are the “doers” of MacroDroid: they perform tasks such as sending a message, adjusting the volume, making an HTTP request, or running a script, among many others.

## When to Use Them {#when_to_use_them}
Actions are used to automate tasks in response to triggers or conditions.  
They are essential to any macro because they define what happens once it is activated.  
For example, if a trigger detects that you’ve arrived home, an action could turn on the lights or play music.

## Types of Actions {#types_of_actions}  
MacroDroid offers a wide variety of categorized actions to make them easier to use:  
- **Device & System:** Adjust brightness, volume, Wi-Fi, Bluetooth, etc.  
- **Applications:** Launch apps, simulate taps, copy text.  
- **Network & Communication:** Send SMS, emails, HTTP requests.  
- **Variables & Logic:** Set variables, loops, conditionals.  
- **Advanced:** Shell scripts, plugins, interactions with external devices.  

You can explore them all in the action selector when editing a macro.

## What About Actions That Take Time? {#what_about_actions_that_take_time}

Most actions execute instantly, but some **take longer**, such as HTTP requests, heavy scripts, or actions that depend on accessibility.

MacroDroid handles this in two ways:

- **Synchronous actions:** They finish *before* the next action runs.
- **Asynchronous actions:** They start, but the macro continues running in parallel.

If you need MacroDroid to wait until the action finishes, enable:

**“Block next action until complete”**

This is important when you need to use data obtained by an action that takes time.

## What if the Action Is Asynchronous and I Need Its Result? {#what_if_the_action_is_asynchronous_and_i_need_its_result}

MacroDroid **does not support callbacks** or any “run this when it finishes” system like in programming languages.  
The practical way to handle this is by using one of these methods:

- **Store the result in a variable**.
- **Use Wait or a loop** until that variable changes.
- **Trigger another macro** when the result is ready (using a global variable, event, etc.).

**Example:** You make an HTTP request to get a price.

- If you need that value *immediately*, enable **Block next action until complete** in the HTTP action.  
- If you don’t want to block:
  - Save the response in a variable,
  - add a **Wait**,
  - check the variable later,
  - or trigger another macro when the value changes.

**What happens if you don’t block and try to validate data?**  
If an asynchronous action hasn’t finished when you try to use its data (for example in a condition), the data won’t be available.  
The macro may fail, skip steps, or use incorrect values (such as empty, previous, or default ones).  
To avoid this, always include conditions to handle this case: verify whether the variable has changed before continuing, or use a loop to wait.

## Important Limitations {#important_limitations}
- Some actions require special permissions (e.g., root for advanced shell scripts).
- Asynchronous actions without blocking can complicate workflows if not handled carefully.
- Not all actions return data directly; use variables to capture results.
- On restricted devices (e.g., Android 10+), some actions like accessibility may need extra configuration.

## Simple Example: “Adjust Volume When Arriving Home” {#simple_example}
- **Trigger:** Location (arriving home).
- **Action:** Set Volume (Media to 50%).
- **Result:** When your arrival is detected, the volume adjusts automatically.
