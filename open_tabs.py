import webbrowser
import time

url = "http://your-website.com"

# Open 20 tabs with 1-second delay
for i in range(10):
    webbrowser.open_new_tab(url)
    # time.sleep()  # Optional: wait 1 second between openings
