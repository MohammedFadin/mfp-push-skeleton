import MFPPush from "ibm-mfp-web-push";

var pushInitOptions = {
  appId: "com.ibm.adcbweb",
  serverUrl: "https://48c473e52818.ngrok.io/home/",
};
MFPPush.initialize(pushInitOptions);

MFPPush.registerDevice()
  .then((res) => {
    console.log("register");
    alert("Successfully Registered Device...");
  })
  .catch((err) => {
    console.log("register");
    console.log("Registration Failed" + err);
  });
