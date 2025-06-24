'use client';

import { useEffect } from 'react';

type BabyMDCampaignFormProps = {
  formID: string;
};

declare global {
  interface Window {
    zf_ValidateAndSubmit: () => boolean;
    zf_CheckMandatory: () => boolean;
    zf_ValidCheck: () => boolean;
    zf_addDataToSalesIQ: () => void;
    isSalesIQIntegrationEnabled?: boolean;
  }
}

declare const zf_FieldArray: string[];

export default function BabyMDCampaignForm({ formID }: BabyMDCampaignFormProps) {
  useEffect(() => {
    const dateAndMonthRegexFormatArray: RegExp[] = zf_SetDateAndMonthRegexBasedOnDateFormate("yyyy-MM-dd");
    const zf_DateRegex: RegExp = new RegExp(dateAndMonthRegexFormatArray[0]);
    const zf_MonthYearRegex: RegExp = new RegExp(dateAndMonthRegexFormatArray[1]);
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



window.zf_ValidateAndSubmit = function (): boolean {
  if (window.zf_CheckMandatory()) {
    if (window.zf_ValidCheck()) {
      if (window.isSalesIQIntegrationEnabled) {
        window.zf_addDataToSalesIQ();
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

   window.zf_CheckMandatory = function (): any {
      for (let i = 0; i < zf_MandArray.length; i++) {
        const form = document.forms.namedItem("form") as HTMLFormElement | null;
        if (!form) return;
        const fieldObj = form[zf_MandArray[i] as keyof typeof form];
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
    };

window.zf_ValidCheck = function (): boolean {
  let isValid = true;
  const form = document.getElementById("form") as HTMLFormElement | null;

  if (!form) return false;

  for (let ind = 0; ind < zf_FieldArray.length; ind++) {
    const fieldName = zf_FieldArray[ind];
    const fieldElem = form.elements.namedItem(fieldName) as HTMLInputElement | null;

    if (fieldElem && fieldElem.nodeName) {
      const checkType = fieldElem.getAttribute("checktype");

      if (fieldName === "SingleLine1") {
        const nameValue = fieldElem.value.trim();
        if (nameValue !== "" && !/^[A-Za-z\s]+$/.test(nameValue)) {
          fieldElem.focus();
          zf_ShowErrorMsg(fieldName, 'format');
          return false;
        }
      }

      switch (checkType) {
        case "c2":
          if (!zf_ValidateNumber(fieldElem)) {
            fieldElem.focus();
            zf_ShowErrorMsg(fieldName, 'format');
            return false;
          }
          break;

        case "c3":
          if (!zf_ValidateCurrency(fieldElem) || !zf_ValidateDecimalLength(fieldElem, 10)) {
            fieldElem.focus();
            zf_ShowErrorMsg(fieldName, 'format');
            return false;
          }
          break;

        case "c4":
          if (!zf_ValidateDateFormat(fieldElem)) {
            fieldElem.focus();
            zf_ShowErrorMsg(fieldName, 'format');
            return false;
          }
          break;

        case "c5":
          if (!zf_ValidateEmailID(fieldElem)) {
            fieldElem.focus();
            zf_ShowErrorMsg(fieldName, 'format');
            return false;
          }
          break;

        case "c6":
          if (!zf_ValidateLiveUrl(fieldElem)) {
            fieldElem.focus();
            zf_ShowErrorMsg(fieldName, 'format');
            return false;
          }
          break;

        case "c7":
          if (!zf_ValidatePhone(fieldElem)) {
            fieldElem.focus();
            zf_ShowErrorMsg(fieldName, 'format');
            return false;
          }
          break;

        case "c8":
          zf_ValidateSignature(fieldElem);
          break;

        case "c9":
          if (!zf_ValidateMonthYearFormat(fieldElem)) {
            fieldElem.focus();
            zf_ShowErrorMsg(fieldName, 'format');
            return false;
          }
          break;
      }
    }
  }

  return isValid;
};

    function zf_ShowErrorMsg(uniqName: string, errorType: 'mandatory' | 'format') {
  for (let errInd = 0; errInd < zf_FieldArray.length; errInd++) {
    const fldLinkName = zf_FieldArray[errInd].split('_')[0];

    const mandatoryErr = document.getElementById(fldLinkName + "_error_mandatory");
    if (mandatoryErr) mandatoryErr.style.display = 'none';

    const formatErr = document.getElementById(fldLinkName + "_error_format");
    if (formatErr) formatErr.style.display = 'none';
  }

  const linkName = uniqName.split('_')[0];
  const errorElement = document.getElementById(linkName + "_error_" + errorType);
  if (errorElement) errorElement.style.display = 'block';
}


 function zf_ValidateNumber(elem: HTMLInputElement): boolean {
  const validChars = "-0123456789";
  const numValue = elem.value.trim();

  if (numValue !== "") {
    if (numValue.charAt(0) === "-" && numValue.length === 1) {
      return false;
    }

    for (let i = 0; i < numValue.length; i++) {
      const strChar = numValue.charAt(i);

      if (strChar === "-" && i !== 0) {
        return false;
      }

      if (!validChars.includes(strChar)) {
        return false;
      }
    }

    return true;
  } else {
    return true; // Empty input is considered valid
  }
}

    function zf_ValidateDateFormat(inpElem:HTMLInputElement) {
      var dateValue = inpElem.value.replace(/^\s+|\s+$/g, '');
      if (dateValue == "") {
        return true;
      } else {
        return (zf_DateRegex.test(dateValue));
      }
    }

    function zf_ValidateCurrency(elem: HTMLInputElement): boolean {
  const validChars = "0123456789.";
  let numValue = elem.value.trim(); // Clean up whitespace

  if (numValue.startsWith('-')) {
    numValue = numValue.substring(1); // Remove negative sign for validation
  }

  // Only validate if input is not empty
  if (numValue !== "") {
    for (let i = 0; i < numValue.length; i++) {
      const char = numValue.charAt(i);
      if (!validChars.includes(char)) {
        return false;
      }
    }
  }

  return true; // Valid if empty or passed all character checks
}


    function zf_ValidateDecimalLength(elem: HTMLInputElement, decimalLen: number): boolean {
  const numValue = elem.value;
  
  if (numValue.includes('.')) {
    const decimalLength = numValue.split('.')[1]?.length ?? 0;
    return decimalLength <= decimalLen;
  }

  return true; // No decimal part means valid
}


    function zf_ValidateEmailID(elem: HTMLInputElement): boolean {
  const emailValue = elem.value.trim();

  if (emailValue !== "") {
    const emailArray = emailValue.split(",");
    const emailExp = /^[\w]([\w\-.+&'/]*)@([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,22}$/;

    for (let i = 0; i < emailArray.length; i++) {
      const email = emailArray[i].trim();
      if (!emailExp.test(email)) {
        return false;
      }
    }
  }

  return true; // Valid if empty or all emails pass
}


    function zf_ValidateLiveUrl(elem:HTMLInputElement) {
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

function zf_ValidatePhone(inpElem: HTMLInputElement): boolean {
  const ZFPhoneRegex = {
    PHONE_INTE_ALL_REG: /^[+]{0,1}[()0-9-. ]+$/,
    PHONE_INTE_NUMERIC_REG: /^[0-9]+$/,
    PHONE_INTE_CONT_CODE_ENABLED_REG: /^[(0-9-.][()0-9-. ]*$/,
    PHONE_USA_REG: /^[0-9]+$/,
    PHONE_CONT_CODE_REG: /^[+][0-9]{1,4}$/
  };

  const phoneFormat = parseInt(inpElem.getAttribute("phoneformat") || "0");
  const fieldInpVal = inpElem.value.trim();
  let toReturn = true;

  if (phoneFormat === 1) {
    const valType = inpElem.getAttribute("valtype");

    if (valType === 'code') {
      const codeRexp = ZFPhoneRegex.PHONE_CONT_CODE_REG;
      if (fieldInpVal !== "" && !codeRexp.test(fieldInpVal)) {
        return false;
      }
    } else {
      let IRexp = ZFPhoneRegex.PHONE_INTE_ALL_REG;
      const formatType = inpElem.getAttribute("phoneformattype");

      if (formatType === '2') {
        IRexp = ZFPhoneRegex.PHONE_INTE_NUMERIC_REG;
      }

      if (fieldInpVal !== "" && !IRexp.test(fieldInpVal)) {
        return false;
      }

      if (fieldInpVal !== "" && (fieldInpVal.length < 8 || fieldInpVal.length > 12)) {
        return false;
      }
    }

    return true;

  } else if (phoneFormat === 2) {
    const InpMaxlength = parseInt(inpElem.getAttribute("maxlength") || "0", 10);
    const USARexp = ZFPhoneRegex.PHONE_USA_REG;

    if ((fieldInpVal !== "" && USARexp.test(fieldInpVal) && fieldInpVal.length === InpMaxlength) || fieldInpVal === "") {
      return true;
    } else {
      return false;
    }
  }

  return true; // Default fallback
}


    function zf_ValidateSignature(objElem: HTMLElement): boolean {
  const linkName = objElem.getAttribute("compname");
  if (!linkName) return false;

  const canvasElem = document.getElementById("drawingCanvas-" + linkName) as HTMLCanvasElement | null;
  const hiddenSignInputElem = document.getElementById("hiddenSignInput-" + linkName) as HTMLInputElement | null;

  if (!canvasElem || !hiddenSignInputElem) return false;

  const isValidSign = zf_IsSignaturePresent(objElem, linkName, canvasElem);

  hiddenSignInputElem.value = isValidSign ? canvasElem.toDataURL() : "";

  return isValidSign;
}


    function zf_MandatoryCheckSignature(objElem: HTMLElement): boolean {
      const linkName = objElem.getAttribute("compname");
      if (!linkName) return false;

      const canvasElem = document.getElementById("drawingCanvas-" + linkName) as HTMLCanvasElement | null;
      if (!canvasElem) return false;

      const isValid = zf_IsSignaturePresent(objElem, linkName, canvasElem);
      return isValid;
    }


    function zf_IsSignaturePresent(
  objElem: HTMLElement,
  linkName: string,
  canvasElem: HTMLCanvasElement
): boolean {
  const context = canvasElem.getContext('2d');
  if (!context) return false;

  const canvasWidth = canvasElem.width;
  const canvasHeight = canvasElem.height;
  const canvasData = context.getImageData(0, 0, canvasWidth, canvasHeight);
  const data = canvasData.data;
  const signLen = data.length;

  for (let index = 0; index < signLen; index++) {
    if (data[index] !== 0) {
      return true; // A non-transparent pixel found (signature present)
    }
  }

  return false; // All pixels are transparent
}


   function zf_FocusNext(elem: HTMLInputElement, event: KeyboardEvent): void {
  const keyCode = event.keyCode;

  // Ignore Tab (9), Shift (16), and Arrow Keys (37–40)
  if (keyCode === 9 || keyCode === 16 || (keyCode >= 37 && keyCode <= 40)) {
    return;
  }

  const compname = elem.getAttribute("compname");
  const inpElemName = elem.getAttribute("name");

  if (!compname || !inpElemName) return;

  if (inpElemName === `${compname}_countrycode`) {
    if (elem.value.length === 3) {
      const nextElem = document.getElementsByName(`${compname}_first`)[0] as HTMLInputElement | undefined;
      nextElem?.focus();
    }
  } else if (inpElemName === `${compname}_first`) {
    if (elem.value.length === 3) {
      const nextElem = document.getElementsByName(`${compname}_second`)[0] as HTMLInputElement | undefined;
      nextElem?.focus();
    }
  }
}


    function zf_ValidateMonthYearFormat(inpElem: HTMLInputElement): boolean {
  const monthYearValue = inpElem.value.trim();

  if (monthYearValue === "") {
    return true;
  }

  return zf_MonthYearRegex.test(monthYearValue);
}


function zf_SetDateAndMonthRegexBasedOnDateFormate(dateFormat: string): [RegExp, RegExp] | [] {
  let dateFormatRegExp: RegExp | null = null;
  let monthYearFormatRegExp: RegExp | null = null;

  switch (dateFormat) {
    case "dd-MMM-yyyy":
      dateFormatRegExp = /^(([0][1-9])|([1-2][0-9])|([3][0-1]))-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)-(19|20)\d{2}$/;
      monthYearFormatRegExp = /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)-(19|20)\d{2}$/;
      break;
    case "dd-MMMM-yyyy":
      dateFormatRegExp = /^(([0][1-9])|([1-2][0-9])|([3][0-1]))-(January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)-(19|20)\d{2}$/;
      monthYearFormatRegExp = /^(January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)-(19|20)\d{2}$/;
      break;
    case "MMMM-dd-yyyy":
      dateFormatRegExp = /^(January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)-(([0][1-9])|([1-2][0-9])|([3][0-1]))-(19|20)\d{2}$/;
      monthYearFormatRegExp = /^(January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)-(19|20)\d{2}$/;
      break;
    case "dd/MM/yyyy":
      dateFormatRegExp = /^(([0][1-9])|([1-2][0-9])|([3][0-1]))\/([0][1-9]|1[012])\/(19|20)\d{2}$/;
      monthYearFormatRegExp = /^([0][1-9]|1[012])\/(19|20)\d{2}$/;
      break;
    case "dd-MM-yyyy":
      dateFormatRegExp = /^(([0][1-9])|([1-2][0-9])|([3][0-1]))-([0][1-9]|1[012])-(19|20)\d{2}$/;
      monthYearFormatRegExp = /^([0][1-9]|1[012])-(19|20)\d{2}$/;
      break;
    case "MM/dd/yyyy":
      dateFormatRegExp = /^([0][1-9]|1[012])\/(([0][1-9])|([1-2][0-9])|([3][0-1]))\/(19|20)\d{2}$/;
      monthYearFormatRegExp = /^([0][1-9]|1[012])\/(19|20)\d{2}$/;
      break;
    case "yyyy-MM-dd":
      dateFormatRegExp = /^(19|20)\d{2}-([0][1-9]|1[012])-(([0][1-9])|([1-2][0-9])|([3][0-1]))$/;
      monthYearFormatRegExp = /^(19|20)\d{2}-([0][1-9]|1[012])$/;
      break;
    case "yyyy/MM/dd":
      dateFormatRegExp = /^(19|20)\d{2}\/([0][1-9]|1[012])\/(([0][1-9])|([1-2][0-9])|([3][0-1]))$/;
      monthYearFormatRegExp = /^(19|20)\d{2}\/([0][1-9]|1[012])$/;
      break;
    case "dd.MM.yyyy":
      dateFormatRegExp = /^(([0][1-9])|([1-2][0-9])|([3][0-1]))\.([0][1-9]|1[012])\.(19|20)\d{2}$/;
      monthYearFormatRegExp = /^([0][1-9]|1[012])\.(19|20)\d{2}$/;
      break;
    case "MM-dd-yyyy":
      dateFormatRegExp = /^([0][1-9]|1[012])-(([0][1-9])|([1-2][0-9])|([3][0-1]))-(19|20)\d{2}$/;
      monthYearFormatRegExp = /^([0][1-9]|1[012])-(19|20)\d{2}$/;
      break;
  }

  return (dateFormatRegExp && monthYearFormatRegExp) ? [dateFormatRegExp, monthYearFormatRegExp] : [];
}
const interval = setInterval(() => {
    if (
      typeof window.zf_CheckMandatory === "function" &&
      typeof window.zf_ValidCheck === "function"
    ) {
window.zf_ValidateAndSubmit = function (): boolean {
  if (window.zf_CheckMandatory()) {
    if (window.zf_ValidCheck()) {
      if (window.isSalesIQIntegrationEnabled) {
        window.zf_addDataToSalesIQ();
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
};clearInterval(interval);
    }
  }, 100);

  return () => clearInterval(interval);

}, []);

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const form = event.currentTarget;

  const honeypot = form.elements.namedItem("verifyfld") as HTMLInputElement;
  if (honeypot && honeypot.value.trim() !== "") {
    console.warn("Bot submission detected via honeypot");
    return false; // Stop processing the form
  }

  if (typeof window.zf_ValidateAndSubmit !== "function") {
    console.error("Zoho validation function is not available (zf_ValidateAndSubmit)");
    return;
  }

  try {
    const isValid = window.zf_ValidateAndSubmit();
    if (isValid) {
      console.log("Zoho validation passed, submitting form...");
      form.submit();
    } else {
      console.warn("Form submission blocked due to Zoho validation failure.");
    }
  } catch (err) {
    console.error("Error during Zoho form validation:", err);
  }
};


  return (
    <div className=" py-6">
      <form
        action="https://forms.zohopublic.in/babymd/form/BabyMDAllCampaignsCopy/formperma/RMfHwDcwoS7zp-F4irz4qypI3-gc2RoNtfBHy_YO9-Q/htmlRecords/submit"
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
              <label className="zf-labelName block text-16px   text-[#2E2E2E] text-[16px] mb-1">
                Name <em className="zf-important text-red-500">*</em>
              </label>
              <div className="zf-tempContDiv ">
                <span>
                  <input
                    type="text"
                    name="SingleLine1"
                    data-checktype="c1"
                    maxLength={255}
                    data-fieldtype="1"
                    className=" zf-input-underline w-full text-16px   border-b mb-4  py-1 focus:outline-none"
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
              <label className="zf-labelName block text-16px   text-[#2E2E2E] text-[16px] mb-1">
                Baby&apos;s Date Of Birth
              </label>
              <div className="zf-tempContDiv relative">
                <span>
                  <input
                    type="date"
                    name="Date"
                    data-checktype="c4"
                    maxLength={25}
                    className="w-full zf-input-underline  py-1  focus:outline-none text-16px   border-b mb-4 "
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
              <label className="zf-labelName block text-16px   text-[#2E2E2E] text-[16px] mb-1">
                Phone <em className="zf-important text-red-500">*</em>
              </label>
              <div className="zf-tempContDiv zf-phonefld">
                <div className="zf-phwrapper zf-phNumber">
                  <span>
                    <input
                      type="text"
                      data-compname="PhoneNumber"
                      name="PhoneNumber_countrycode"
                      maxLength={20}
                      data-checktype="c7"
                      data-phoneformat="1"
                      data-iscountrycodeenabled="false"
                      data-fieldtype="11"
                      id="international_PhoneNumber_countrycode"
                      data-valtype="number"
                      data-phoneformattype="2"
                      className="l zf-input-underline w-full text-16px   border-b mb-4  py-1 focus:outline-none"
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
              <label className="zf-labelName block text-16px   text-[#2E2E2E] text-[16px] mb-1">
                Email
              </label>
              <div className="zf-tempContDiv">
                <span>
                  <input
                    type="text"
                    name="Email"
                    data-checktype="c5"
                    maxLength={255}
                    className="zf-input-underline w-full text-16px   border-b mb-4  py-1 focus:outline-none"
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
              <label className="zf-labelName block text-16px   text-[#2E2E2E] text-[16px] mb-1">
                Form Location
              </label>
              <div className="zf-tempContDiv">
                <span>
                  <input
                    type="text"
                    name="SingleLine"
                    data-checktype="c1"
                    className=" zf-input-underline w-full text-16px   border-b mb-4  py-1 focus:outline-none"
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
              <label className="zf-labelName block text-16px   text-[#2E2E2E] mb-1">
                Lead Source
              </label>
              <div className="zf-tempContDiv">
                <span>
                  <input
                    type="text"
                    name="SingleLine2"
                    data-checktype="c1"
                    value=""
                    maxLength={255}
                    data-fieldtype="1"
                    readOnly
                    className=" w-full text-16px   border-b mb-4  py-1 focus:outline-none"
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
              <label className="zf-labelName block text-16px   text-[#2E2E2E] text-[16px] mb-1">
                Lead Status
              </label>
              <div className="zf-tempContDiv">
                <span>
                  <input
                    type="text"
                    name="SingleLine3"
                    data-checktype="c1"
                    value=""
                    maxLength={255}
                    data-fieldtype="1"
                    readOnly
                    className="zf-input-underline w-full text-16px   border-b mb-4  py-1 focus:outline-none"
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
              <label className="zf-labelName block text-16px   text-[#2E2E2E] text-[16px] mb-1">
                Lead Sub Status
              </label>
              <div className="zf-tempContDiv">
                <span>
                  <input
                    type="text"
                    name="SingleLine4"
                    data-checktype="c1"
                    value=""
                    maxLength={255}
                    data-fieldtype="1"
                    readOnly
                    className="zf-input-underline w-full text-16px   border-b mb-4  py-1 focus:outline-none"
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
              <label className="zf-labelName block text-16px   text-[#2E2E2E] mb-1">
                Redirection Check Name
              </label>
              <div className="zf-tempContDiv">
                <span>
                  <input
                    type="text"
                    name="SingleLine7"
                    data-checktype="c1"
                    maxLength={255}
                    data-fieldtype="1"
                    className=" zf-input-underline w-full text-16px   border-b mb-4  py-1 focus:outline-none"
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
              <label className="zf-labelName block text-16px   text-[#2E2E2E] mb-1">
                Lead Sub Source
              </label>
              <div className="zf-tempContDiv">
                <span>
                  <input
                    type="text"
                    name="SingleLine8"
                    data-checktype="c1"
                    maxLength={255}
                    data-fieldtype="1"
                    className="zf-input-underline w-full text-16px   border-b mb-4  py-1 focus:outline-none"
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
              <label className="zf-labelName block text-16px   text-[#2E2E2E] mb-1">
                First Enquired Service
              </label>
              <div className="zf-tempContDiv">
                <span>
                  <input
                    type="text"
                    name="SingleLine9"
                    data-checktype="c1"
                    maxLength={255}
                    data-fieldtype="1"
                    className=" zf-input-underline w-full text-16px   border-b mb-4  py-1 focus:outline-none"
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
              <label className="zf-labelName block text-16px   text-[#2E2E2E] text-[16px] mb-1">
                Channel
              </label>
              <div className="zf-tempContDiv">
                <span>
                  <input
                    type="text"
                    name="SingleLine10"
                    data-checktype="c1"
                    maxLength={255}
                    data-fieldtype="1"
                    className=" zf-input-underline w-full text-16px   border-b mb-4  py-1 focus:outline-none"
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
              <label className="zf-labelName block text-16px   text-[#2E2E2E] mb-1">
                Reward Claimed
              </label>
              <div className="zf-tempContDiv">
                <span>
                  <input
                    type="text"
                    name="SingleLine11"
                    data-checktype="c1"
                    maxLength={255}
                    data-fieldtype="1"
                    className="zf-input-underline w-full text-16px   border-b mb-4  py-1 focus:outline-none"
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
        <input
          type="text"
          name="verifyfld"
          id="verifyfld"
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />
      </form>
    </div>
  );
}