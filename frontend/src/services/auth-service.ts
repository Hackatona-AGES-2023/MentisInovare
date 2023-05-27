
let isMerchant = false;

export function getCurrentIsMerchant() {
    return isMerchant;
}

export function setCurrentIsMerchant(_isMerchant: boolean) {
    isMerchant = _isMerchant;
}
