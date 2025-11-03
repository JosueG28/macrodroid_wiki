# Variables in MacroDroid

Variables store and manipulate data in your macros — they are containers that hold values your macros use and can change during execution.

- **Global Variables**  
  - Syntax: `{v=varName}` or `[v=varName]`  
  - Available in **all macros**, including **Action Blocks**  
  - Ideal for sharing data between macros or keeping persistent information  

- **Local Variables**  
  - Syntax: `{lv=varName}` or `[lv=varName]`  
  - Only available **within the macro** where created (including Action Blocks called by that macro)  
  - Perfect for private or macro-specific values, such as an **API Key** used only in that macro.  
  - In that case, it’s recommended to mark it as a **Secure Variable**.  

> Use Global Variables for persistent or shared data.  
> Use Local Variables for isolated or sensitive data.

---

## Secure Variables

Mark variables as **Secure** to clear their contents when macros are shared, exported, or uploaded to the template store.  
This helps protect sensitive data such as passwords, tokens, or private keys.

---

## Using Variables in Conditions, Constraints, and Text Fields

Variables can be used in:

- **Conditions** (e.g., “if `isLoggedIn` is true”)  
- **Constraints** (e.g., “run only if `batteryLevel` > 50”)  
- **Text fields** by referencing `{v=yourVar}` or `{lv=yourVar}`  
- **Magic Text inputs** across various actions  

Variable values are **persistent**, but they can change if you use actions such as **Set Variable**, **Clear Value**, or if an output action (like **HTTP Request**, **Shell Script**, or **Text Manipulation**) overwrites their content.

---

## Quick Summary

- **Global:** `{v=varName}` — shared and persistent data  
- **Local:** `{lv=varName}` — private or macro-specific data  
- **Secure:** hides sensitive information in exports  

Variables are the brain behind your macros. Master them to unlock the full potential of MacroDroid.

---

## Recommended Video Guides

<iframe width="560" height="315" src="https://www.youtube.com/embed/0V_EcyhxrpA?si=Mvq51zfOQaU4AWbe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
 
<iframe width="560" height="315" src="https://www.youtube.com/embed/u2zY5dv34CM?si=8n0rwJRhtAcNFnh6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
