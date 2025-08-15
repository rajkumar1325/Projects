# # 1st method (using library)
# import qrcode as qr
# img = qr.make("This is my name")
# img.save("name.jpg")




# 2nd method (using class)
import qrcode 

# Create instance
qr = qrcode.QRCode(version=11, 
                   error_correction=qrcode.constants.ERROR_CORRECT_H,
                   border=4,
                   box_size=10)

# adding a link/data
var1 = "https://www.linkedin.com/in/rajkumar0104/"
qr.add_data(var1)

qr.make(fit=True) #necessary /mandatory


# generating an image 
img = qr.make_image(fill_color = "green",  # black --> best for scanning
                    back_color = "white") #white --> light 


img.save("image.png")


