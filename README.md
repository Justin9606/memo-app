# memowash

APP NAME: MemoWash

iOS
DOWNLOAD THE APP:  https://i.diawi.com/a6Cf3p


Package used to build:
    
   ## "@react-native-async-storage/async-storage": "^1.16.2", //used for saving data even the app is killed user able see the data unless deleting the app
   ## "@react-navigation/native": "^6.0.8",   
   ## "@react-navigation/native-stack": "^6.5.0",       //used for navigating to other pages(this package gives Native feelings and better performance)
   ## "@reduxjs/toolkit": "^1.8.0",                    //used for Global State
   ## "lottie-react-native": "^5.0.1",                //used for lottie animation (.json)
   ## "moment": "^2.29.1",                           //used for displaying the date/time easily
   ## "react": "17.0.2",   
   ## "react-native": "0.67.3",  
   ## "react-native-keyboard-manager": "^6.5.4-4", // used for adding "Done" func for keyboard hiding after user is done adding texts.
   ## "react-native-safe-area-context": "^4.1.4",
   ## "react-native-screens": "^3.13.1",
   ## "react-native-svg": "^12.3.0",            //used for svg icons
   ## "react-native-svg-transformer": "^1.0.0",//App has some svg icons used for displaying svg 
   ## "react-native-uuid": "^2.0.1",         //used for generating random unique IDs
   ## "react-redux": "^7.2.6",              //
   ## "styled-components": "^5.3.3".       //used for styling UI modern way and easy way

***AFTER DOWNLOADING THE PROJECT open it on VSCode and on the root folder of the project type
npm install => this command installs the node_modules
If the project has already have then try to remove and install again by => rm -rf node_modules (Removes node_modules)
and Install => npm install

Run iOS:

!!! 
    Issues may accur
    Check your XCode Version try to use the lates version of XCode
    running on real Device: Check your iphone software version. And update to the lates version of the software.
     
!!! 

  ***I built the App and Created .ipa. You can easly DOWNLOAD THE APP AND INSTALL ON YOUR DEVICE AND USE IT LIKE A NORMAL APP
    HERE IS THE LINK TO DOWNLOAD => https://i.diawi.com/a6Cf3p 
  ***

1. Clone the project from Github
2. Open the project with Code editor e.g: VScode
3. Go to ios folder from the project folder using this command => cd ios and run this command => pod install and then open the ios folder using => open .
4. Double click to => getwashswat.xcworkspace ***NOT getwashswat.xcodeproj***
5. Select Sign in Team
6. Select Device type 
7. Click the run btn

Run Android:

1. Go to android folder from Vscode by typing => cd android
2. Clean the build file by => ./gradlew clean
3. Open your Android Studion and Open the Emulation by click AVD manager 
4. Select Device Type and Run  this command from vscode on the root folder => "eact-native run-android"
5. When type react-native run-android (after clicking Enter keyboard) Metro server will automatically runs but if it does not 
    Then typ "npm start"

*** HERE IS THE PICTURED INSTRUCTIONS FOR RUNNING APP FOR ANDROID and iOS***


Android:

1. open AVD manager from Android Studio
![Screen Shot 2022-03-14 at 1 53 02 PM](https://user-images.githubusercontent.com/54047658/159074957-8a15a278-3a0f-4690-b15f-06f3fa089c85.png)
2. Create Virtual Device (If you dont have, If you have then you dont have to create)
![Screen Shot 2022-03-14 at 1 53 31 PM](https://user-images.githubusercontent.com/54047658/159075643-3631e6aa-6ddc-4328-9137-d63b0fc481f6.png)
3. Select Device Type
![Screen Shot 2022-03-14 at 1 53 49 PM](https://user-images.githubusercontent.com/54047658/159075669-d7ac324d-f1fc-489a-a310-16a1911b25a1.png)
4. Select System Type
![Screen Shot 2022-03-14 at 1 53 58 PM](https://user-images.githubusercontent.com/54047658/159075765-f6631409-dc40-46c3-9d3b-bb5c188c56db.png)
5. Verify Configuration by clicking "Finish" btn
![Screen Shot 2022-03-14 at 1 54 14 PM](https://user-images.githubusercontent.com/54047658/159075797-9a8b82dc-75ac-424c-a6f9-9aeb2da5ad60.png)
6. Run Virtual Device
![Screen Shot 2022-03-14 at 1 54 50 PM](https://user-images.githubusercontent.com/54047658/159075838-3658876a-8c9a-420c-8723-c050e11e79a6.png)


iOS: 
1. Select Device Type
![Screen Shot 2022-03-14 at 2 05 53 PM](https://user-images.githubusercontent.com/54047658/159075877-e3586dfb-d431-4a5f-b821-7f35c64e2a66.png)
2. Run The project
![Screen Shot 2022-03-14 at 2 03 07 PM](https://user-images.githubusercontent.com/54047658/159075925-d047230d-2ba1-4b59-a958-77a0bd0d2a4e.png)
