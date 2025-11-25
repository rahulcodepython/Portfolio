export const successResponse = <T>(data?: T, message: string = "Success") => {
    return {
        success: true,
        data,
        message
    }
}

export const errorResponse = (message: string) => {
    return {
        success: false,
        message
    }
}