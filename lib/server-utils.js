'use server';

// Note: this only works on the server side
export function getNetlifyContext() {
    return process.env.CONTEXT;
}

export const uploadDisabled = process.env.NEXT_PUBLIC_DISABLE_UPLOADS?.toLowerCase() === "true";