# Ashwin Interiors Website

## Open it
1. Open this folder in VS Code (File > Open Folder).
2. Install the "Live Server" extension, right-click `index.html`, choose "Open with Live Server".

## Edit before going live
1. **WhatsApp number**: top of `script.js`, change `WHATSAPP_NUMBER` (country code + digits, no + or spaces, e.g. 919876543210).
2. **Contact details**: in `index.html`, find the Contact section and replace the phone, email, address and hours. Also change `tel:+910000000000` in the phone link.
3. **Photos**: all photos are in the `images` folder. To replace one, save your own photo with the same file name:
   - `kitchen1.jpg` to `kitchen9.jpg`
   - `wardrobe1.jpg` to `wardrobe8.jpg`
   - `tvunit1.jpg` to `tvunit9.jpg`
   - `ceiling1.jpg` to `ceiling10.jpg`
   - `panel1.jpg` to `panel10.jpg`
   Keep photos under about 500 KB each so the site loads fast.
4. **Add a photo**: copy one `<img ... />` line inside a `<div class="masonry">` in `index.html`, then change the file name.

## Files
- `index.html`: page content
- `style.css`: colours, fonts, layout (colours are at the top, in `:root`)
- `script.js`: menu, photo viewer, WhatsApp enquiry form

## Put it online (free)
Drag this whole folder onto https://app.netlify.com/drop, or use GitHub Pages.
