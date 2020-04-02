
export const isPersian = (text: string | undefined) => {
    if(!text){
        return false
    }
    let arabicAlphabetDigits = /[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufc3f]|[\ufe70-\ufefc]|[\u0200]|[\u00A0]/g;
    let result = arabicAlphabetDigits.test(text);
    return result;
};
