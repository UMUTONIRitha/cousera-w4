/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){
    if(document.getElementById("same").checked){
        var copyName = document.getElementById("shippingName").Value;
        var copyZip = document.getElementById("shippingZip").value;
        
        document.getElementById("billingName").value = copyName;
        document.getElementById("billingZip").value = copyZip;

    }
    else{
        document.getElementById("billingName").value = "";
        document.getElementById("billingZip").value = "";
    }
}