
var setupCost = 100;

function getgarmentValue () 
{
    var garmentValue = document.getElementById("Garment").value;

    if (garmentValue == "Premium Tee") {
        garmentCost = 8;
        console.log(garmentCost);
    };
    if (garmentValue == "Hoodie") {
        garmentCost = 24;
        console.log(garmentCost);
    };
    if (garmentValue == "Long Sleeve") {
        garmentCost = 16;
        console.log(garmentCost);
    };
    if (garmentValue == "Tank Top") {
        garmentCost = 9;
        console.log(garmentCost);
    
    };
};

function getPlacementValue () 
{
    var locationValue = document.getElementById("Locations").value;

    if (locationValue == "1") {
        placementCost = 2;
        console.log(placementCost);
    };
    if (locationValue == "2") {
        placementCost = 4;
        console.log(placementCost);
    };
    if (locationValue == "3") {
        placementCost = 6;
        console.log(placementCost);
    };
    if (locationValue == "4") {
        placementCost = 7;
        console.log(placementCost);
    
    };
};

function getInkValue () 
{
    var inkValue = document.getElementById("Ink Colors").value;

    if (inkValue == "1 Color") {
        inkCost = .10;
        console.log(inkCost);
    };
    if (inkValue == "2 Colors") {
        inkCost = .20;
        console.log(inkCost);
    };
    if (inkValue == "3 Colors") {
        inkCost = .30;
        console.log(inkCost);
    };
    if (inkValue == "4 Colors") {
        inkCost = .40;
        console.log(inkCost);
    
    };
};

function getDesignFee () 
{
    var designHelp = document.getElementById("Design Help").value;

    if (designHelp == "Yes") {
        designCost = 100;
        console.log(designCost);
    };
    if (designHelp == "No") {
        designCost = 0;
        console.log(designCost);
    };
};

function getFoldandBagFee () 
{
    var foldAndBag = document.getElementById("FandB").value;

    if (foldAndBag == "Yes") {
        fandbCost = 1.75;
        console.log(fandbCost);
    };
    if (foldAndBag == "No") {
        fandbCost = 0;
        console.log(fandbCost);
    };
};

function getTagFee () 
{
    var tagging = document.getElementById("Tagged").value;

    if (tagging == "Yes Tag") {
        tagCost = .50;
        console.log(tagCost);
    };
    if (tagging == "No Tag") {
        tagCost = 0;
        console.log(tagCost);
    };
};

function getRushedFee () 
{
    var rushedOrder = document.getElementById("Rushed").value;

    if (rushedOrder == "Yes Rush") {
        rushedFee = 1.05;
        console.log(rushedFee);
    };
    if (rushedOrder == "No Rush") {
        rushedFee = 1;
        console.log(rushedFee);
    };
};

function getComplexity () 
{
    var complexity = document.getElementById("complexity").value;

    if (complexity == "Low") {
        complexityFee = 1;
        console.log(complexityFee);
    };
    if (complexity == "Medium") {
        complexityFee = 1.025;
        console.log(complexityFee);
    };
    if (complexity == "High") {
        complexityFee = 1.05;
        console.log(complexityFee);
    };
};

function getShipping () 
{
    var shipping = document.getElementById("Shipping").value;

    if (shipping == "Yes Ship") {
        shippingfee = 200;
        console.log(shippingfee);
    };
    if (shipping == "No Ship") {
        shippingfee = 0;
        console.log(shippingfee);
    };
};

function getPaymentType ()
{
    var paymentType = document.getElementById("paymentType").value;

    if (paymentType == "ACH") {
        paymentFee = 1;
        console.log(paymentFee);
    }
    if (paymentType == "Wire Transfer") {
        paymentFee = 1;
        console.log(paymentFee);
    }
    if (paymentType == "Credit Card") {
        paymentFee = 1.025;
        console.log(paymentFee);
    }
}

var result = document.getElementById("result");

document.getElementById("submit").addEventListener("click", function() {
    var qty = document.getElementById("QTY").value;
    result.value = "$"+ Math.round(paymentFee * (rushedFee * (complexityFee * (qty * garmentCost + (placementCost*qty) + (inkCost*qty) + designCost + (fandbCost*qty) + (tagCost*qty) + setupCost)))) ;
    //console.log(complexityFee * (qty * garmentCost + (placementCost*qty) + (inkCost*qty) + designCost + (fandbCost*qty) + (tagCost*qty) + setupCost));
    var garmentCostSummary =   `the cost of your garments are ${qty*garmentCost}`;
    var designerCostSummary =   `the cost of the designer fee is ${designCost}`;
    console.log(garmentCostSummary,'\n',designerCostSummary);
});

