---
hide:
  - toc
---

# Supported Variable Types

MacroDroid supports several variable types to store different kinds of data.  
Each type defines the kind of information it can hold and how it behaves within macros.  
Understanding them will help you build more powerful and organized automations.

---

### 🧾 String

Stores **text values** such as words, phrases, names, or any combination of characters.

**Examples:**
- `"Hello world"`
- `"Current temperature: 25°C"`
- `"https://api.example.com/login"`

**Common uses:**
- Display text in notifications or Text-to-Speech actions.  
- Store results from HTTP Requests or Shell Commands.  
- Build dynamic messages by combining text and other variables.  

**Magic Text example:**  
`The current time is {hour}:{minute} {am_pm}`

---

### 🔢 Integer

Stores **whole numbers**, positive or negative, without decimals.

**Examples:**
- `0`, `10`, `-25`, `2025`

**Common uses:**
- Counters (for example, how many times a macro has executed).  
- Controlling loops (for example, repeat X times).  
- Comparing numbers in conditions (for example, `if battery > 50`).  

**Practical example:**
> Create a counter that increases every time Wi-Fi connects:  
> - Action → **Set Variable** → `wifiCount = wifiCount + 1` or `wifiCount = value + 1`

---

### 🔣 Decimal

Stores **numbers with decimals** for more precise calculations.

**Examples:**
- `3.14`, `-0.01`, `25.75`

**Common uses:**
- Mathematical operations with fractional values (temperature, distance, time).  
- Results from actions like **Calculate Mathematical Expression**.  
- Averages or percentages.  

**Practical example:**
> Store the result of an operation:  
> - Action → **Set Variable** → `average = (value1 + value2) / 2`

---

### ⚙️ Boolean

Stores a **true or false** logical value.

**Examples:**
- `true`, `false`

**Common uses:**
- Control macro flow (for example, execute an action only if `isEnabled` is true).  
- Toggle functions on or off without deleting actions.  
- Use as a “flag” to prevent repeated execution.  

**Practical example:**
> If `nightMode` is true, enable dark mode.  

---

### 📋 Array

Stores **an ordered list of values**, all accessible by index (position).

**Examples:**
- `[1, 2, 3, 4]`
- `["Monday", "Tuesday", "Wednesday"]`
- `[{"name": "Alex"}, {"name": "Sara"}]`

**Common uses:**
- Store lists of names, URLs, numbers, or settings.  
- Iterate through items with the **Iterate Dictionary/Array** action.  
- Create dynamic menus or randomized lists.  

**Practical example:**
> Use an Array to pick a random message:  
> - `messages = ["Hello!", "How are you?", "Good day!"]`  
> - Action → **Iterate Dictionary/Array** → show in a notification.  

---

### 🗂️ Dictionary

Stores **key-value pairs**, where each key has an associated value.  
Allows you to organize structured information like a small JSON object.

**Examples:**
- `{"name": "Alex", "age": 30}`
- `{"city": "Guadalajara", "country": "Mexico"}`
- `{"user": {"name": "Josue", "active": true}}`

**Common uses:**
- Store configuration data, API responses, or grouped information.  
- Access specific values using their key (for example, `user.name`).  
- Build more complex structures by combining Arrays and Dictionaries.  

**Practical example:**
> Store user data after an HTTP Request:  
> - `user = {"name": "Josue", "premium": true, "level": 4}`  
> - You can then access `{v=user[name]}` or `{v=user[level]}`  

---

> 💡 **Tip:**  
> Use **Arrays** and **Dictionaries** when working with collections or structured data.  
> Use **Strings**, **Integers**, **Decimals**, and **Booleans** for simple or single-value data.
