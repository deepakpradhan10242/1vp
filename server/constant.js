export const BASE_URL =
    process.env.EASEBUZZ_ENV === "test"
        ? "https://testpay.easebuzz.in"
        : "https://pay.easebuzz.in";