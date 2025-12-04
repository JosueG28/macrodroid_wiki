# Introduction to Magic Text

## Description {#description}
**Magic Text** is MacroDroid’s way of inserting dynamic data (variables, time, location, battery, etc.) into almost any text field: notification titles, SMS messages, file names, URLs, and more.  
Instead of writing fixed text that never changes, Magic Text is replaced with the real value at the exact moment the macro runs.

## Where to find it {#where_to_find_it}
Almost every time you see a text field in a trigger, action, or constraint, you'll find a **“…”** button.  
Tapping it opens the full Magic Text selector available in that context.

**Tip:** If you already know the code, you can type it manually (but be careful with typos).

## How Magic Text is written {#how_magic_text_is_written}

There are **two valid formats**:

| Format             | Example         | Recommended for                 | Compatibility           |
|--------------------|-----------------|---------------------------------|--------------------------|
| Braces `{}`        | `{hour}`        | Everything (especially dictionaries) | From v5.21 onward |
| Brackets `[]`      | `[hour]`        | Older versions                  | All versions            |

**Current recommendation:** Always use **braces `{}`**, they are clearer, especially with dictionaries and arrays.

## Commonly used basic examples {#commonly_used_basic_examples}

| What you want to insert            | Magic Text             | Example output |
|-----------------------------------|------------------------|----------------|
| Current time (24h format)         | `{hour}`               | 14             |
| Day of the week                   | `{dayofweek}`          | monday         |
| Battery level                     | `{battery}`            | 68             |
| Connected Wi-Fi SSID              | `{ssid}`               | Home_WiFi      |
| Current brightness                | `{current_brightness}` | 26             |
| Clipboard text                    | `{clipboard}`          | https://…      |
| Year                              | `{year}`               | 2026           |

## Practical example: Personalized notification {#example}

**Action:** Show Notification  
**Title:** `Hello {lv=name}!`  
**Text:** `Today is {dayofweek} and your battery is at {battery}%. Your current Wi-Fi is {ssid}.`

**Output when executed:**

 Hello Ana!  
  Today is monday and your battery is at 72%. Your current Wi-Fi is Home_Ana.
