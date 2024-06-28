const SITE_NAME = 'RED Bank - Vanilla js'

export const getTitle = title => {
    return title ? `${title} | ${SITE_NAME}` : SITE_NAME
}