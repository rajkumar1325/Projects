import tkinter as tk
import random
from PIL import Image, ImageTk

root = tk.Tk()
root.geometry("300x400")
root.title("Dice Game")

# Dice image files
dice = ["one.png", "two.png", "three.png", "four.png", "five.png", "six.png"]

# Function to resize image
def load_image(file, size=(80, 80)):   #  adjust size here
    img = Image.open(file)
    img = img.resize(size, Image.LANCZOS)
    return ImageTk.PhotoImage(img)

# Initial dice images
img1 = load_image(random.choice(dice))
img2 = load_image(random.choice(dice))

label1 = tk.Label(root, image=img1)
label2 = tk.Label(root, image=img2)

label1.image = img1
label2.image = img2

label1.place(x=40, y=100)
label2.place(x=160, y=100)

# Roll function
def roll_dice():
    new_img1 = load_image(random.choice(dice))
    new_img2 = load_image(random.choice(dice))
    
    label1.config(image=new_img1)
    label2.config(image=new_img2)
    
    # keep references
    label1.image = new_img1
    label2.image = new_img2

# Button to roll dice
btn = tk.Button(root, text="Roll Dice", command=roll_dice, font=("Arial", 14))
btn.place(x=100, y=300)

root.mainloop()
