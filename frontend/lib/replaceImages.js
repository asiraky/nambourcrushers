import { getStrapiMedia } from '../lib/media';

export function replaceImages(content) {
    return content.replace(/(!\[.*?\]\()(.+?)(\))/g, function(whole, a, b, c) {
        return a + getStrapiMedia({ url: b }) + c;
    });
}
