'use client';

import { useEffect } from 'react';

export default function BabyMDCampaignForm({formID}) {
  useEffect(() => {
    var dateAndMonthRegexFormateArray = zf_SetDateAndMonthRegexBasedOnDateFormate('yyyy-MM-dd');
    var zf_DateRegex = new RegExp(dateAndMonthRegexFormateArray[0]);
    var zf_MonthYearRegex = new RegExp(dateAndMonthRegexFormateArray[1]);
    var zf_MandArray = ["SingleLine1", "PhoneNumber_countrycode"];
    var zf_FieldArray = [
      "SingleLine1",
      "Date",
      "PhoneNumber_countrycode",
      "Email",
      "SingleLine",
      "SingleLine2",
      "SingleLine3",
      "SingleLine4",
      "SingleLine7",
      "SingleLine8",
      "SingleLine9",
      "SingleLine10",
      "SingleLine11",
    ];
    var isSalesIQIntegrationEnabled = false;
    var salesIQFieldsArray = [];

    window.zf_ValidateAndSubmit = function () {
      if (zf_CheckMandatory()) {
        if (zf_ValidCheck()) {
          if (isSalesIQIntegrationEnabled) {
            zf_addDataToSalesIQ();
          }
          console.log("Validation passed, submitting form...");
          return true;
        } else {
          console.log("Validation failed in zf_ValidCheck");
          return false;
        }
      } else {
        console.log("Validation failed in zf_CheckMandatory");
        return false;
      }
    };

    function zf_CheckMandatory() {
      for (let i = 0; i < zf_MandArray.length; i++) {
        var fieldObj = document.forms.form[zf_MandArray[i]];
        if (fieldObj) {
          if (fieldObj.nodeName != null) {
            if (fieldObj.nodeName == 'OBJECT') {
              if (!zf_MandatoryCheckSignature(fieldObj)) {
                zf_ShowErrorMsg(zf_MandArray[i], 'mandatory');
                return false;
              }
            } else {
              var value = fieldObj.value.replace(/^\s+|\s+$/g, '');
              if (zf_MandArray[i] === "SingleLine1") {
                if (value.length == 0) {
                  fieldObj.focus();
                  zf_ShowErrorMsg(zf_MandArray[i], 'mandatory');
                  return false;
                }
              } else if (value.length == 0) {
                fieldObj.focus();
                zf_ShowErrorMsg(zf_MandArray[i], 'mandatory');
                return false;
              }
              if (fieldObj.type == 'file') {
                fieldObj.focus();
                zf_ShowErrorMsg(zf_MandArray[i], 'mandatory');
                return false;
              }
            }
          } else if (fieldObj.nodeName == 'SELECT') {
            if (fieldObj.options[fieldObj.selectedIndex].value == '-Select-') {
              fieldObj.focus();
              zf_ShowErrorMsg(zf_MandArray[i], 'mandatory');
              return false;
            }
          } else if (fieldObj.type == 'checkbox' || fieldObj.type == 'radio') {
            if (fieldObj.checked == false) {
              fieldObj.focus();
              zf_ShowErrorMsg(zf_MandArray[i], 'mandatory');
              return false;
            }
          } else {
            var checkedValsCount = 0;
            var inpChoiceElems = fieldObj;
            for (var ii = 0; ii < inpChoiceElems.length; ii++) {
              if (inpChoiceElems[ii].checked === true) {
                checkedValsCount++;
              }
            }
            if (checkedValsCount == 0) {
              inpChoiceElems[0].focus();
              zf_ShowErrorMsg(zf_MandArray[i], 'mandatory');
              return false;
            }
          }
        }
      }
      return true;
    }

    function zf_ValidCheck() {
      var isValid = true;
      for (let ind = 0; ind < zf_FieldArray.length; ind++) {
        var fieldObj = document.forms.form[zf_FieldArray[ind]];
        if (fieldObj) {
          if (fieldObj.nodeName != null) {
            var checkType = fieldObj.getAttribute("checktype");
            if (zf_FieldArray[ind] === "SingleLine1") {
              var nameValue = fieldObj.value.trim();
              if (nameValue !== "" && !/^[A-Za-z\s]+$/.test(nameValue)) {
                isValid = false;
                fieldObj.focus();
                zf_ShowErrorMsg(zf_FieldArray[ind], 'format');
                return false;
              }
            }
            if (checkType == "c2") {
              if (!zf_ValidateNumber(fieldObj)) {
                isValid = false;
                fieldObj.focus();
                zf_ShowErrorMsg(zf_FieldArray[ind], 'format');
                return false;
              }
            } else if (checkType == "c3") {
              if (!zf_ValidateCurrency(fieldObj) || !zf_ValidateDecimalLength(fieldObj, 10)) {
                isValid = false;
                fieldObj.focus();
                zf_ShowErrorMsg(zf_FieldArray[ind], 'format');
                return false;
              }
            } else if (checkType == "c4") {
              if (!zf_ValidateDateFormat(fieldObj)) {
                isValid = false;
                fieldObj.focus();
                zf_ShowErrorMsg(zf_FieldArray[ind], 'format');
                return false;
              }
            } else if (checkType == "c5") {
              if (!zf_ValidateEmailID(fieldObj)) {
                isValid = false;
                fieldObj.focus();
                zf_ShowErrorMsg(zf_FieldArray[ind], 'format');
                return false;
              }
            } else if (checkType == "c6") {
              if (!zf_ValidateLiveUrl(fieldObj)) {
                isValid = false;
                fieldObj.focus();
                zf_ShowErrorMsg(zf_FieldArray[ind], 'format');
                return false;
              }
            } else if (checkType == "c7") {
              if (!zf_ValidatePhone(fieldObj)) {
                isValid = false;
                fieldObj.focus();
                zf_ShowErrorMsg(zf_FieldArray[ind], 'format');
                return false;
              }
            } else if (checkType == "c8") {
              zf_ValidateSignature(fieldObj);
            } else if (checkType == "c9") {
              if (!zf_ValidateMonthYearFormat(fieldObj)) {
                isValid = false;
                fieldObj.focus();
                zf_ShowErrorMsg(zf_FieldArray[ind], 'format');
                return false;
              }
            }
          }
        }
      }
      return isValid;
    }

    function zf_ShowErrorMsg(uniqName, errorType) {
      var fldLinkName;
      for (let errInd = 0; errInd < zf_FieldArray.length; errInd++) {
        fldLinkName = zf_FieldArray[errInd].split('_')[0];
        document.getElementById(fldLinkName + "_error_mandatory").style.display = 'none';
        document.getElementById(fldLinkName + "_error_format").style.display = 'none';
      }
      var linkName = uniqName.split('_')[0];
      document.getElementById(linkName + "_error_" + errorType).style.display = 'block';
    }

    function zf_ValidateNumber(elem) {
      var validChars = "-0123456789";
      var numValue = elem.value.replace(/^\s+|\s+$/g, '');
      if (numValue != null && !numValue == "") {
        var strChar;
        var result = true;
        if (numValue.charAt(0) == "-" && numValue.length == 1) {
          return false;
        }
        for (let i = 0; i < numValue.length && result == true; i++) {
          strChar = numValue.charAt(i);
          if ((strChar == "-") && (i != 0)) {
            return false;
          }
          if (validChars.indexOf(strChar) == -1) {
            result = false;
          }
        }
        return result;
      } else {
        return true;
      }
    }

    function zf_ValidateDateFormat(inpElem) {
      var dateValue = inpElem.value.replace(/^\s+|\s+$/g, '');
      if (dateValue == "") {
        return true;
      } else {
        return (zf_DateRegex.test(dateValue));
      }
    }

    function zf_ValidateCurrency(elem) {
      var validChars = "0123456789.";
      var numValue = elem.value.replace(/^\s+|\s+$/g, '');
      if (numValue.charAt(0) == '-') {
        numValue = numValue.substring(1, numValue.length);
      }
      if (numValue != null && !numValue == "") {
        var strChar;
        var result = true;
        for (let i = 0; i < numValue.length && result == true; i++) {
          strChar = numValue.charAt(i);
          if (validChars.indexOf(strChar) == -1) {
            result = false;
          }
        }
        return result;
      } else {
        return true;
      }
    }

    function zf_ValidateDecimalLength(elem, decimalLen) {
      var numValue = elem.value;
      if (numValue.indexOf('.') >= 0) {
        var decimalLength = numValue.substring(numValue.indexOf('.') + 1).length;
        if (decimalLength > decimalLen) {
          return false;
        }
        return true;
      }
      return true;
    }

    function zf_ValidateEmailID(elem) {
      var check = 0;
      var emailValue = elem.value;
      if (emailValue != null && !emailValue == "") {
        var emailArray = emailValue.split(",");
        for (let i = 0; i < emailArray.length; i++) {
          var emailExp = /^[\w]([\w\-.+&'/]*)@([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,22}$/;
          if (!emailExp.test(emailArray[i].replace(/^\s+|\s+$/g, ''))) {
            check = 1;
          }
        }
        if (check == 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    }

    function zf_ValidateLiveUrl(elem) {
      var urlValue = elem.value;
      if (urlValue !== null && typeof(urlValue) !== "undefined") {
        urlValue = urlValue.replace(/^\s+|\s+$/g, '');
        if (urlValue !== "") {
          var urlregex = new RegExp(
            "^(((https|http|ftps|ftp)://[a-zA-Z\\d]+((_|-|-|-|-)*@([a-zA-Z\\d]+\\.[a-zA-Z\\d]+\\-)*)+(:\\d{1,5})?)|((w|W){3}(\\.[a-zA-Z\\d]+((_|-|-|-)*)+){2,}(:\\d{1,5})?)|([a-zA-Z\\d]+((_|-|-|-)*)(\\.[a-zA-Z\\d]+((_|-|-|-|-|-)*)+(:\\d{1,5})?))(/[-\\w.?,:'/\\\\+=&;%$#@()!~]+)*)?$",
            "i"
          );
          return (urlregex.test(urlValue));
        }
      }
      return true;
    }

    function zf_ValidatePhone(inpElem) {
      var ZFPhoneRegex = {
        PHONE_INTE_ALL_REG: /^[+]{0,1}[()0-9-. ]+$/,
        PHONE_INTE_NUMERIC_REG: /^[0-9]+$/,
        PHONE_INTE_CONT_CODE_ENABLED_REG: /^[(0-9-.][()0-9-. ]*$/,
        PHONE_USA_REG: /^[0-9]+$/,
        PHONE_CONT_CODE_REG: /^[+][0-9]{1,4}$/
      };
      var phoneFormat = parseInt(inpElem.getAttribute("phoneformat"));
      var fieldInpVal = inpElem.value.replace(/^\s+|\s+$/g, '');
      var toReturn = true;
      if (phoneFormat === 1) {
        if (inpElem.getAttribute("valtype") == 'code') {
          var codeRexp = ZFPhoneRegex.PHONE_CONT_CODE_REG;
          if (fieldInpVal != "" && !codeRexp.test(fieldInpVal)) {
            return false;
          }
        } else {
          var IRexp = ZFPhoneRegex.PHONE_INTE_ALL_REG;
          if (inpElem.getAttribute("phoneformattype") == '2') {
            IRexp = ZFPhoneRegex.PHONE_INTE_NUMERIC_REG;
          }
          if (fieldInpVal != "" && !IRexp.test(fieldInpVal)) {
            toReturn = false;
            return toReturn;
          }
          if (fieldInpVal != "" && (fieldInpVal.length < 8 || fieldInpVal.length > 12)) {
            toReturn = false;
            return toReturn;
          }
        }
        return toReturn;
      } else if (phoneFormat === 2) {
        var InpMaxlength = inpElem.getAttribute("maxlength");
        var USARexp = ZFPhoneRegex.PHONE_USA_REG;
        if (fieldInpVal != "" && USARexp.test(fieldInpVal) && fieldInpVal.length == InpMaxlength) {
          toReturn = true;
        } else if (fieldInpVal == "") {
          toReturn = true;
        } else {
          toReturn = false;
        }
        return toReturn;
      }
    }

    function zf_ValidateSignature(objElem) {
      var linkName = objElem.getAttribute("compname");
      var canvasElem = document.getElementById("drawingCanvas-" + linkName);
      var isValidSign = zf_IsSignaturePresent(objElem, linkName, canvasElem);
      var hiddenSignInputElem = document.getElementById("hiddenSignInput-" + linkName);
      if (isValidSign) {
        hiddenSignInputElem.value = canvasElem.toDataURL();
      } else {
        hiddenSignInputElem.value = "";
      }
      return isValidSign;
    }

    function zf_MandatoryCheckSignature(objElem) {
      var linkName = objElem.getAttribute("compname");
      var canvasElem = document.getElementById("drawingCanvas-" + linkName);
      var isValid = zf_IsSignaturePresent(objElem, linkName, canvasElem);
      return isValid;
    }

    function zf_IsSignaturePresent(objElem, linkName, canvasElem) {
      var context = canvasElem.getContext('2d');
      var canvasWidth = canvasElem.width;
      var canvasHeight = canvasElem.height;
      var canvasData = context.getImageData(0, 0, canvasWidth, canvasHeight);
      var signLen = canvasData.data.length;
      var flag = false;
      for (var index = 0; index < signLen; index++) {
        if (!canvasData.data[index]) {
          flag = false;
        } else if (canvasData.data[index]) {
          flag = true;
          break;
        }
      }
      return flag;
    }

    function zf_FocusNext(elem, event) {
      if (event.keyCode == 9 || event.keyCode == 16) {
        return;
      }
      if (event.keyCode >= 37 && event.keyCode <= 40) {
        return;
      }
      var compname = elem.getAttribute("compname");
      var inpElemName = elem.getAttribute("name");
      if (inpElemName == compname + "_countrycode") {
        if (elem.value.length == 3) {
          document.getElementsByName(compname + "_first")[0].focus();
        }
      } else if (inpElemName == compname + "_first") {
        if (elem.value.length == 3) {
          document.getElementsByName(compname + "_second")[0].focus();
        }
      }
    }

    function zf_ValidateMonthYearFormat(inpElem) {
      var monthYearValue = inpElem.value.replace(/^\s+|\s+$/g, '');
      if (monthYearValue == "") {
        return true;
      } else {
        return (zf_MonthYearRegex.test(monthYearValue));
      }
    }

    function zf_SetDateAndMonthRegexBasedOnDateFormate(dateFormat) {
      var dateAndMonthRegexFormateArray = new Array();
      var dateFormatRegExp;
      var monthYearFormatRegExp;
      if (dateFormat === "dd-MMM-yyyy") {
        dateFormatRegExp = "^(([0][1-9])|([1-2][0-9])|([3][0-1]))[-](Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)[-](?:(?:19|20)[0-9]{2})$";
        monthYearFormatRegExp = "^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)[-](?:(?:19|20)[0-9]{2})$";
      } else if (dateFormat === "dd-MMMM-yyyy") {
        dateFormatRegExp = "^(([0][1-9])|([1-2][0-9])|([3][0-1]))[-](January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)[-](?:(?:19|20)[0-9]{2})$";
        monthYearFormatRegExp = "^(January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)[-](?:(?:19|20)[0-9]{2})$";
      } else if (dateFormat === "MMMM-dd-yyyy") {
        dateFormatRegExp = "^(January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)[-](([0][1-9])|([1-2][0-9])|([3][0-1]))[-](?:(?:19|20)[0-9]{2})$";
        monthYearFormatRegExp = "^(January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)[-](?:(?:19|20)[0-9]{2})$";
      } else if (dateFormat === "dd/MM/yyyy") {
        dateFormatRegExp = "^(([0][1-9])|([1-2][0-9])|([3][0-1]))[\/]([0][1-9]|1[012])[\/](?:(?:19|20)[0-9]{2})$";
        monthYearFormatRegExp = "^([0][1-9]|1[012])[\/](?:(?:19|20)[0-9]{2})$";
      } else if (dateFormat === "dd-MM-yyyy") {
        dateFormatRegExp = "^(([0][1-9])|([1-2][0-9])|([3][0-1]))[-]([0][1-9]|1[012])[-](?:(?:19|20)[0-9]{2})$";
        monthYearFormatRegExp = "^([0][1-9]|1[012])[-](?:(?:19|20)[0-9]{2})$";
      } else if (dateFormat === "MM/dd/yyyy") {
        dateFormatRegExp = "^([0][1-9]|1[012])[\/](([0][1-9])|([1-2][0-9])|([3][0-1]))[\/](?:(?:19|20)[0-9]{2})$";
        monthYearFormatRegExp = "^([0][1-9]|1[012])[\/](?:(?:19|20)[0-9]{2})$";
      } else if (dateFormat === "yyyy-MM-dd") {
        dateFormatRegExp = "^(?:(?:19|20)[0-9]{2})[-]([0][1-9]|1[012])[-](([0][1-9])|([1-2][0-9])|([3][0-1]))$";
        monthYearFormatRegExp = "^(?:(?:19|20)[0-9]{2})[-]([0][1-9]|1[012])$";
      } else if (dateFormat === "yyyy/MM/dd") {
        dateFormatRegExp = "^(?:(?:19|20)[0-9]{2})[\/]([0][1-9]|1[012])[\/](([0][1-9])|([1-2][0-9])|([3][0-1]))$";
        monthYearFormatRegExp = "^(?:(?:19|20)[0-9]{2})[\/]([0][1-9]|1[012])$";
      } else if (dateFormat === "dd.MM.yyyy") {
        dateFormatRegExp = "^(([0][1-9])|([1-2][0-9])|([3][0-1]))[.]([0][1-9]|1[012])[.](?:(?:19|20)[0-9]{2})$";
        monthYearFormatRegExp = "^([0][1-9]|1[012])[.](?:(?:19|20)[0-9]{2})$";
      } else if (dateFormat === "MM-dd-yyyy") {
        dateFormatRegExp = "^([0][1-9]|1[012])[-](([0][1-9])|([1-2][0-9])|([3][0-1]))[-](?:(?:19|20)[0-9]{2})$";
        monthYearFormatRegExp = "^([0][1-9]|1[012])[-](?:(?:19|20)[0-9]{2})$";
      }
      dateAndMonthRegexFormateArray.push(dateFormatRegExp);
      dateAndMonthRegexFormateArray.push(monthYearFormatRegExp);
      return dateAndMonthRegexFormateArray;
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (window.zf_ValidateAndSubmit()) {
      console.log("Submitting form to Zoho...");
      form.submit();
    } else {
      console.log("Form submission blocked due to validation failure.");
    }
  };

  return (
    <div className=" py-6">

      <form
        action="https://forms.zohopublic.in/babymd/form/BabyMDAllCampaigns1/formperma/qQrwwuwi5tXnsN7jQ7JXt1X-8rGKbHnmgr1HhPnToUc/htmlRecords/submit"
        name="form"
        method="POST"
        onSubmit={handleSubmit}
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        id={formID}
        className="w-full"
      >
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="" />
        <input type="hidden" name="zc_gad" value="" />
        <input type="hidden" name="utm_source" value="website" />
        <input type="hidden" name="utm_medium" value="" />
        <input type="hidden" name="utm_campaign" value="" />
        <input type="hidden" name="utm_term" value="" />
        <input type="hidden" name="utm_content" value="" />
        <input type="hidden" name="utm_placement" value="" />
        <input type="hidden" name="utm_ad_id" value="" />
        <input type="hidden" name="utm_adset_id" value="" />
        <input type="hidden" name="utm_ad_name" value="" />
        <input type="hidden" name="utm_platform" value="" />
        <input type="hidden" name="utm_campaign_id" value="" />
        <input type="hidden" name="gclid" value="" />
        <input type="hidden" name="fbclid" value="" />
        <input type="hidden" name="form_location" value="" />
        <input type="hidden" name="page_url" value="" />

        <ul className="m-0 p-0">
          <li className="mb-4">
            <p className="zf-frmDesc m-0"></p>
            <div className="zf-clearBoth clear-both"></div>
          </li>
        </ul>

        <div className="zf-subContWrap flex flex-col items-start">
          <ul className="m-0 p-0 w-full">
            <li className="zf-tempFrmWrapper mb-4">
              <label className="zf-labelName block text-16px md:text-[20px] text-[#2E2E2E] text-[16px] mb-1">
                Name <em className="zf-important text-red-500">*</em>
              </label>
              <div className="zf-tempContDiv ">
                <span>
                  <input
                    type="text"
                    name="SingleLine1"
                    checktype="c1"
                    maxLength="255"
                    fieldtype="1"
                    className=" zf-input-underline w-full text-16px md:text-[20px] border-b mb-4 py-2 focus:outline-none"
                  />
                </span>
                <p id="SingleLine1_error_mandatory" className=" mt-[-7px]  text-red-500 text-xs mt-1 hidden">
                  Name must be added.
                </p>
                <p id="SingleLine1_error_format" className="mt-[-7px]  text-red-500 text-xs mt-1 hidden">
                  Name should be alphabet.
                </p>
              </div>
              <div className="zf-clearBoth clear-both"></div>
            </li>

            <li className="zf-tempFrmWrapper mb-4">
              <label className="zf-labelName block text-16px md:text-[20px] text-[#2E2E2E] text-[16px] mb-1">
                Baby&apos;s Date Of Birth
              </label>
              <div className="zf-tempContDiv relative">
                <span>
                  <input
                    type="date"
                    name="Date"
                    checktype="c4"
                    maxLength="25"
                    className="w-full zf-input-underline py-2  focus:outline-none text-16px md:text-[20px] border-b mb-4 "
                  />                
                </span>
                <div className="zf-clearBoth clear-both"></div>
                <p id="Date_error_mandatory" className="mt-[-7px]  text-red-500 text-xs mt-1 hidden">
                  Date must be added.
                </p>
                <p id="Date_error_format" className="mt-[-7px]  text-red-500 text-xs mt-1 hidden">
                  Invalid value
                </p>
              </div>
              <div className="zf-clearBoth clear-both"></div>
            </li>

            <li className="zf-tempFrmWrapper mb-4">
              <label className="zf-labelName block text-16px md:text-[20px] text-[#2E2E2E] text-[16px] mb-1">
                Phone <em className="zf-important text-red-500">*</em>
              </label>
              <div className="zf-tempContDiv zf-phonefld">
                <div className="zf-phwrapper zf-phNumber">
                  <span>
                    <input
                      type="text"
                      compname="PhoneNumber"
                      name="PhoneNumber_countrycode"
                      maxLength="20"
                      checktype="c7"
                      phoneformat="1"
                      iscountrycodeenabled="false"
                      fieldtype="11"
                      id="international_PhoneNumber_countrycode"
                      valtype="number"
                      phoneformattype="2"
                      className="l zf-input-underline w-full text-16px md:text-[20px] border-b mb-4 py-2 focus:outline-none"
                    />
                  </span>
                  <div className="zf-clearBoth clear-both"></div>
                </div>
                <p id="PhoneNumber_error_mandatory" className="mt-[-7px] text-red-500 text-xs mt-1 hidden">
                  Phone number must be added.
                </p>
                <p id="PhoneNumber_error_format" className="mt-[-7px] text-red-500 text-xs mt-1 hidden">
                  Phone number must be at least 8-12 digits.
                </p>
              </div>
              <div className="zf-clearBoth clear-both"></div>
            </li>

            <li className="zf-tempFrmWrapper mb-4">
              <label className="zf-labelName block text-16px md:text-[20px] text-[#2E2E2E] text-[16px] mb-1">
                Email
              </label>
              <div className="zf-tempContDiv">
                <span>
                  <input
                    type="text"
                    name="Email"
                    checktype="c5"
                    maxLength="255"
                    className="zf-input-underline w-full text-16px md:text-[20px] border-b mb-4 py-2 focus:outline-none"
                  />
                </span>
                <p id="Email_error_mandatory" className="mt-[-7px] text-red-500 text-xs mt-1 hidden">
                  Email must be added.
                </p>
                <p id="Email_error_format" className="mt-[-7px] text-red-500 text-xs mt-1 hidden">
                  Invalid email format
                </p>
              </div>
              <div className="zf-clearBoth clear-both"></div>
            </li>

            <li className="zf-tempFrmWrapper mb-4 hidden">
              <label className="zf-labelName block text-16px md:text-[20px] text-[#2E2E2E] text-[16px] mb-1">
                Form Location
              </label>
              <div className="zf-tempContDiv">
                <span>
                  <input
                    type="text"
                    name="SingleLine"
                    checktype="c1"
                    className=" zf-input-underline w-full text-16px md:text-[20px] border-b mb-4 py-2 focus:outline-none"
                  />
                </span>
                <p id="SingleLine_error_mandatory" className="mt-[-7px] text-red-500 text-xs mt-1 hidden">
                  Form Location must be added.
                </p>
                <p id="SingleLine_error_format" className="mt-[-7px] text-red-500 text-xs mt-1 hidden">
                  Invalid value
                </p>
              </div>
              <div className="zf-clearBoth clear-both"></div>
            </li>

            <li className="zf-tempFrmWrapper mb-4 hidden">
              <label className="zf-labelName block text-16px md:text-[20px] text-[#2E2E2E] mb-1">
                Lead Source
              </label>
              <div className="zf-tempContDiv">
                <span>
                  <input
                    type="text"
                    name="SingleLine2"
                    checktype="c1"
                    value=""
                    maxLength="255"
                    fieldtype="1"
                    readOnly
                    className=" w-full text-16px md:text-[20px] border-b mb-4 py-2 focus:outline-none"
                  />
                </span>
                <p id="SingleLine2_error_mandatory" className="mt-[-7px] text-red-500 text-xs mt-1 hidden">
                  Lead Source must be added.
                </p>
                <p id="SingleLine2_error_format" className="mt-[-7px] text-red-500 text-xs mt-1 hidden">
                  Invalid value
                </p>
              </div>
              <div className="zf-clearBoth clear-both"></div>
            </li>

            <li className="zf-tempFrmWrapper mb-4 hidden">
              <label className="zf-labelName block text-16px md:text-[20px] text-[#2E2E2E] text-[16px] mb-1">
                Lead Status
              </label>
              <div className="zf-tempContDiv">
                <span>
                  <input
                    type="text"
                    name="SingleLine3"
                    checktype="c1"
                    value=""
                    maxLength="255"
                    fieldtype="1"
                    readOnly
                    className="zf-input-underline w-full text-16px md:text-[20px] border-b mb-4 py-2 focus:outline-none"
                  />
                </span>
                <p id="SingleLine3_error_mandatory" className="mt-[-7px] text-red-500 text-xs mt-1 hidden">
                  Lead Status must be added.
                </p>
                <p id="SingleLine3_error_format" className="mt-[-7px] text-red-500 text-xs mt-1 hidden">
                  Invalid value
                </p>
              </div>
              <div className="zf-clearBoth clear-both"></div>
            </li>

            <li className="zf-tempFrmWrapper mb-4 hidden">
              <label className="zf-labelName block text-16px md:text-[20px] text-[#2E2E2E] text-[16px] mb-1">
                Lead Sub Status
              </label>
              <div className="zf-tempContDiv">
                <span>
                  <input
                    type="text"
                    name="SingleLine4"
                    checktype="c1"
                    value=""
                    maxLength="255"
                    fieldtype="1"
                    readOnly
                    className="zf-input-underline w-full text-16px md:text-[20px] border-b mb-4 py-2 focus:outline-none"
                  />
                </span>
                <p id="SingleLine4_error_mandatory" className="mt-[-7px] text-red-500 text-xs mt-1 hidden">
                  Lead Sub Status must be added.
                </p>
                <p id="SingleLine4_error_format" className="mt-[-7px] text-red-500 text-xs mt-1 hidden">
                  Invalid value
                </p>
              </div>
              <div className="zf-clearBoth clear-both"></div>
            </li>

            <li className="zf-tempFrmWrapper mb-4 hidden">
              <label className="zf-labelName block text-16px md:text-[20px] text-[#2E2E2E] mb-1">
                Redirection Check Name
              </label>
              <div className="zf-tempContDiv">
                <span>
                  <input
                    type="text"
                    name="SingleLine7"
                    checktype="c1"
                    maxLength="255"
                    fieldtype="1"
                    className=" zf-input-underline w-full text-16px md:text-[20px] border-b mb-4 py-2 focus:outline-none"
                  />
                </span>
                <p id="SingleLine7_error_mandatory" className="mt-[-7px] text-red-500 text-xs mt-1 hidden">
                  Redirection Check Name must be added.
                </p>
                <p id="SingleLine7_error_format" className="mt-[-7px] text-red-500 text-xs mt-1 hidden">
                  Invalid value
                </p>
              </div>
              <div className="zf-clearBoth clear-both"></div>
            </li>

            <li className="zf-tempFrmWrapper mb-4 hidden">
              <label className="zf-labelName block text-16px md:text-[20px] text-[#2E2E2E] mb-1">
                Lead Sub Source
              </label>
              <div className="zf-tempContDiv">
                <span>
                  <input
                    type="text"
                    name="SingleLine8"
                    checktype="c1"
                    maxLength="255"
                    fieldtype="1"
                    className="zf-input-underline w-full text-16px md:text-[20px] border-b mb-4 py-2 focus:outline-none"
                  />
                </span>
                <p id="SingleLine8_error_mandatory" className="mt-[-7px] text-red-500 text-xs mt-1 hidden">
                  Lead Sub Source must be added.
                </p>
                <p id="SingleLine8_error_format" className="mt-[-7px] text-red-500 text-xs mt-1 hidden">
                  Invalid value
                </p>
              </div>
              <div className="zf-clearBoth clear-both"></div>
            </li>

            <li className="zf-tempFrmWrapper mb-4 hidden">
              <label className="zf-labelName block text-16px md:text-[20px] text-[#2E2E2E] mb-1">
                First Enquired Service
              </label>
              <div className="zf-tempContDiv">
                <span>
                  <input
                    type="text"
                    name="SingleLine9"
                    checktype="c1"
                    maxLength="255"
                    fieldtype="1"
                    className=" zf-input-underline w-full text-16px md:text-[20px] border-b mb-4 py-2 focus:outline-none"
                  />
                </span>
                <p id="SingleLine9_error_mandatory" className="mt-[-7px] text-red-500 text-xs mt-1 hidden">
                  First Enquired Service must be added.
                </p>
                <p id="SingleLine9_error_format" className="mt-[-7px] text-red-500 text-xs mt-1 hidden">
                  Invalid value
                </p>
              </div>
              <div className="zf-clearBoth clear-both"></div>
            </li>

            <li className="zf-tempFrmWrapper mb-4 hidden">
              <label className="zf-labelName block text-16px md:text-[20px] text-[#2E2E2E] text-[16px] mb-1">
                Channel
              </label>
              <div className="zf-tempContDiv">
                <span>
                  <input
                    type="text"
                    name="SingleLine10"
                    checktype="c1"
                    maxLength="255"
                    fieldtype="1"
                    className=" zf-input-underline w-full text-16px md:text-[20px] border-b mb-4 py-2 focus:outline-none"
                  />
                </span>
                <p id="SingleLine10_error_mandatory" className="mt-[-7px] text-red-500 text-xs mt-1 hidden">
                  Channel must be added.
                </p>
                <p id="SingleLine10_error_format" className="mt-[-7px] text-red-500 text-xs mt-1 hidden">
                  Invalid value
                </p>
              </div>
              <div className="zf-clearBoth clear-both"></div>
            </li>

            <li className="zf-tempFrmWrapper mb-4 hidden">
              <label className="zf-labelName block text-16px md:text-[20px] text-[#2E2E2E] mb-1">
                Reward Claimed
              </label>
              <div className="zf-tempContDiv">
                <span>
                  <input
                    type="text"
                    name="SingleLine11"
                    checktype="c1"
                    maxLength="255"
                    fieldtype="1"
                    className="zf-input-underline w-full text-16px md:text-[20px] border-b mb-4 py-2 focus:outline-none"
                  />
                </span>
                <p id="SingleLine11_error_mandatory" className="mt-[-7px] text-red-500 text-xs mt-1 hidden">
                  Reward Claimed must be added.
                </p>
                <p id="SingleLine11_error_format" className="mt-[-7px] text-red-500 text-xs mt-1 hidden">
                  Invalid value
                </p>
              </div>
              <div className="zf-clearBoth clear-both"></div>
            </li>
          </ul>
        </div>

        <ul className="m-0 p-0">
          <li className="zf-fmFooter flex justify-center mt-6">
            <button
              type="submit"
              className="w-48 h-12 bg-[#5943A5] hover:bg-[#5943A5] text-white font-semibold rounded-full flex items-center justify-center gap-2 transition-all duration-300 text-sm md:text-base"
            >
              SUMBIT FORM
              <svg
                width="24"
                height="14"
                viewBox="0 0 29 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-3.5 md:w-7 md:h-4"
              >
                <path
                  opacity="0.5"
                  d="M20.0113 8.06535L5.00195 14.947L5.00195 1.18373L20.0113 8.06535Z"
                  fill="white"
                />
                <path
                  d="M28.1851 8.06535L13.1758 14.947L13.1758 1.18373L28.1851 8.06535Z"
                  fill="white"
                />
              </svg>
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}