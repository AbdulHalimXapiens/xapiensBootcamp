function SHA1(msg) {




    function rotate_left(n, s) {


        let t4 = (n << s) | (n >>> (32 - s));


        return t4;


    };




    function lsb_hex(val) {


        let str = "";


        let i;


        let vh;


        let vl;




        for (i = 0; i <= 6; i += 2) {


            vh = (val >>> (i * 4 + 4)) & 0x0f;


            vl = (val >>> (i * 4)) & 0x0f;


            str += vh.toString(16) + vl.toString(16);


        }


        return str;


    };




    function cvt_hex(val) {


        let str = "";


        let i;


        let v;




        for (i = 7; i >= 0; i--) {


            v = (val >>> (i * 4)) & 0x0f;


            str += v.toString(16);


        }


        return str;


    };






    function Utf8Encode(string) {


        string = string.replace(/\r\n/g, "\n");


        let utftext = "";




        for (let n = 0; n < string.length; n++) {




            let c = string.charCodeAt(n);




            if (c < 128) {


                utftext += String.fromCharCode(c);


            } else if ((c > 127) && (c < 2048)) {


                utftext += String.fromCharCode((c >> 6) | 192);


                utftext += String.fromCharCode((c & 63) | 128);


            } else {


                utftext += String.fromCharCode((c >> 12) | 224);


                utftext += String.fromCharCode(((c >> 6) & 63) | 128);


                utftext += String.fromCharCode((c & 63) | 128);


            }




        }




        return utftext;


    };




    let blockstart;


    let i, j;


    let W = new Array(80);


    let H0 = 0x67452301;


    let H1 = 0xEFCDAB89;


    let H2 = 0x98BADCFE;


    let H3 = 0x10325476;


    let H4 = 0xC3D2E1F0;


    let A, B, C, D, E;


    var temp;




    msg = Utf8Encode(msg);




    let msg_len = msg.length;




    let word_array = new Array();


    for (i = 0; i < msg_len - 3; i += 4) {


        j = msg.charCodeAt(i) << 24 | msg.charCodeAt(i + 1) << 16 |


            msg.charCodeAt(i + 2) << 8 | msg.charCodeAt(i + 3);


        word_array.push(j);


    }




    switch (msg_len % 4) {


        case 0:


            i = 0x080000000;


            break;


        case 1:


            i = msg.charCodeAt(msg_len - 1) << 24 | 0x0800000;


            break;




        case 2:


            i = msg.charCodeAt(msg_len - 2) << 24 | msg.charCodeAt(msg_len - 1) << 16 | 0x08000;


            break;




        case 3:


            i = msg.charCodeAt(msg_len - 3) << 24 | msg.charCodeAt(msg_len - 2) << 16 | msg.charCodeAt(msg_len - 1) << 8 | 0x80;


            break;


    }




    word_array.push(i);




    while ((word_array.length % 16) != 14) word_array.push(0);




    word_array.push(msg_len >>> 29);


    word_array.push((msg_len << 3) & 0x0ffffffff);






    for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {




        for (i = 0; i < 16; i++) W[i] = word_array[blockstart + i];


        for (i = 16; i <= 79; i++) W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);




        A = H0;


        B = H1;


        C = H2;


        D = H3;


        E = H4;




        for (i = 0; i <= 19; i++) {


            temp = (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;


            E = D;


            D = C;


            C = rotate_left(B, 30);


            B = A;


            A = temp;


        }




        for (i = 20; i <= 39; i++) {


            temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;


            E = D;


            D = C;


            C = rotate_left(B, 30);


            B = A;


            A = temp;


        }




        for (i = 40; i <= 59; i++) {


            temp = (rotate_left(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;


            E = D;


            D = C;


            C = rotate_left(B, 30);


            B = A;


            A = temp;


        }




        for (i = 60; i <= 79; i++) {


            temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;


            E = D;


            D = C;


            C = rotate_left(B, 30);


            B = A;


            A = temp;


        }




        H0 = (H0 + A) & 0x0ffffffff;


        H1 = (H1 + B) & 0x0ffffffff;


        H2 = (H2 + C) & 0x0ffffffff;


        H3 = (H3 + D) & 0x0ffffffff;


        H4 = (H4 + E) & 0x0ffffffff;




    }




    var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);




    return temp.toLowerCase();



}


function SHA256(s) {




    let chrsz = 8;


    let hexcase = 0;




    function safe_add(x, y) {


        let lsw = (x & 0xFFFF) + (y & 0xFFFF);


        let msw = (x >> 16) + (y >> 16) + (lsw >> 16);


        return (msw << 16) | (lsw & 0xFFFF);


    }




    function S(X, n) { return (X >>> n) | (X << (32 - n)); }


    function R(X, n) { return (X >>> n); }


    function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }


    function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }


    function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }


    function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }


    function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }


    function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }




    function core_sha256(m, l) {


        let K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);


        let HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);


        let W = new Array(64);


        let a, b, c, d, e, f, g, h, i, j;


        let T1, T2;




        m[l >> 5] |= 0x80 << (24 - l % 32);


        m[((l + 64 >> 9) << 4) + 15] = l;




        for (let i = 0; i < m.length; i += 16) {


            a = HASH[0];


            b = HASH[1];


            c = HASH[2];


            d = HASH[3];


            e = HASH[4];


            f = HASH[5];


            g = HASH[6];


            h = HASH[7];




            for (let j = 0; j < 64; j++) {


                if (j < 16) W[j] = m[j + i];


                else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);




                T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);


                T2 = safe_add(Sigma0256(a), Maj(a, b, c));




                h = g;


                g = f;


                f = e;


                e = safe_add(d, T1);


                d = c;


                c = b;


                b = a;


                a = safe_add(T1, T2);


            }




            HASH[0] = safe_add(a, HASH[0]);


            HASH[1] = safe_add(b, HASH[1]);


            HASH[2] = safe_add(c, HASH[2]);


            HASH[3] = safe_add(d, HASH[3]);


            HASH[4] = safe_add(e, HASH[4]);


            HASH[5] = safe_add(f, HASH[5]);


            HASH[6] = safe_add(g, HASH[6]);


            HASH[7] = safe_add(h, HASH[7]);


        }


        return HASH;


    }




    function str2binb(str) {


        let bin = Array();


        let mask = (1 << chrsz) - 1;


        for (let i = 0; i < str.length * chrsz; i += chrsz) {


            bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i % 32);


        }


        return bin;


    }




    function Utf8Encode(string) {


        string = string.replace(/\r\n/g, "\n");


        let utftext = "";




        for (let n = 0; n < string.length; n++) {




            let c = string.charCodeAt(n);




            if (c < 128) {


                utftext += String.fromCharCode(c);


            } else if ((c > 127) && (c < 2048)) {


                utftext += String.fromCharCode((c >> 6) | 192);


                utftext += String.fromCharCode((c & 63) | 128);


            } else {


                utftext += String.fromCharCode((c >> 12) | 224);


                utftext += String.fromCharCode(((c >> 6) & 63) | 128);


                utftext += String.fromCharCode((c & 63) | 128);


            }




        }




        return utftext;


    }




    function binb2hex(binarray) {


        let hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";


        let str = "";


        for (let i = 0; i < binarray.length * 4; i++) {


            str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +


                hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);


        }


        return str;


    }




    s = Utf8Encode(s);


    return binb2hex(core_sha256(str2binb(s), s.length * chrsz));



}


let MD5 = function(string) {




    function RotateLeft(lValue, iShiftBits) {


        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));


    }




    function AddUnsigned(lX, lY) {


        let lX4, lY4, lX8, lY8, lResult;


        lX8 = (lX & 0x80000000);


        lY8 = (lY & 0x80000000);


        lX4 = (lX & 0x40000000);


        lY4 = (lY & 0x40000000);


        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);


        if (lX4 & lY4) {


            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);


        }


        if (lX4 | lY4) {


            if (lResult & 0x40000000) {


                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);


            } else {


                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);


            }


        } else {


            return (lResult ^ lX8 ^ lY8);


        }


    }




    function F(x, y, z) { return (x & y) | ((~x) & z); }


    function G(x, y, z) { return (x & z) | (y & (~z)); }


    function H(x, y, z) { return (x ^ y ^ z); }


    function I(x, y, z) { return (y ^ (x | (~z))); }




    function FF(a, b, c, d, x, s, ac) {


        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));


        return AddUnsigned(RotateLeft(a, s), b);


    };




    function GG(a, b, c, d, x, s, ac) {


        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));


        return AddUnsigned(RotateLeft(a, s), b);


    };




    function HH(a, b, c, d, x, s, ac) {


        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));


        return AddUnsigned(RotateLeft(a, s), b);


    };




    function II(a, b, c, d, x, s, ac) {


        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));


        return AddUnsigned(RotateLeft(a, s), b);


    };




    function ConvertToWordArray(string) {


        let lWordCount;


        let lMessageLength = string.length;


        let lNumberOfWords_temp1 = lMessageLength + 8;


        let lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;


        let lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;


        let lWordArray = Array(lNumberOfWords - 1);


        let lBytePosition = 0;


        let lByteCount = 0;


        while (lByteCount < lMessageLength) {


            lWordCount = (lByteCount - (lByteCount % 4)) / 4;


            lBytePosition = (lByteCount % 4) * 8;


            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));


            lByteCount++;


        }


        lWordCount = (lByteCount - (lByteCount % 4)) / 4;


        lBytePosition = (lByteCount % 4) * 8;


        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);


        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;


        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;


        return lWordArray;


    };




    function WordToHex(lValue) {


        let WordToHexValue = "",
            WordToHexValue_temp = "",
            lByte, lCount;


        for (lCount = 0; lCount <= 3; lCount++) {


            lByte = (lValue >>> (lCount * 8)) & 255;


            WordToHexValue_temp = "0" + lByte.toString(16);


            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);


        }


        return WordToHexValue;


    };




    function Utf8Encode(string) {


        string = string.replace(/\r\n/g, "\n");


        let utftext = "";




        for (let n = 0; n < string.length; n++) {




            let c = string.charCodeAt(n);




            if (c < 128) {


                utftext += String.fromCharCode(c);


            } else if ((c > 127) && (c < 2048)) {


                utftext += String.fromCharCode((c >> 6) | 192);


                utftext += String.fromCharCode((c & 63) | 128);


            } else {


                utftext += String.fromCharCode((c >> 12) | 224);


                utftext += String.fromCharCode(((c >> 6) & 63) | 128);


                utftext += String.fromCharCode((c & 63) | 128);


            }




        }




        return utftext;


    };




    let x = Array();


    let k, AA, BB, CC, DD, a, b, c, d;


    let S11 = 7,
        S12 = 12,
        S13 = 17,
        S14 = 22;


    let S21 = 5,
        S22 = 9,
        S23 = 14,
        S24 = 20;


    let S31 = 4,
        S32 = 11,
        S33 = 16,
        S34 = 23;


    let S41 = 6,
        S42 = 10,
        S43 = 15,
        S44 = 21;




    string = Utf8Encode(string);




    x = ConvertToWordArray(string);




    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;




    for (k = 0; k < x.length; k += 16) {


        AA = a;
        BB = b;
        CC = c;
        DD = d;


        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);


        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);


        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);


        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);


        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);


        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);


        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);


        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);


        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);


        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);


        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);


        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);


        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);


        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);


        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);


        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);


        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);


        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);


        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);


        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);


        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);


        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);


        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);


        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);


        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);


        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);


        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);


        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);


        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);


        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);


        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);


        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);


        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);


        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);


        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);


        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);


        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);


        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);


        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);


        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);


        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);


        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);


        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);


        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);


        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);


        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);


        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);


        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);


        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);


        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);


        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);


        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);


        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);


        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);


        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);


        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);


        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);


        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);


        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);


        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);


        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);


        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);


        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);


        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);


        a = AddUnsigned(a, AA);


        b = AddUnsigned(b, BB);


        c = AddUnsigned(c, CC);


        d = AddUnsigned(d, DD);


    }




    let temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);




    return temp.toLowerCase();

}


function SHA512(str) {
    function int64(msint_32, lsint_32) {
        this.highOrder = msint_32;
        this.lowOrder = lsint_32;
    }

    let H = [new int64(0x6a09e667, 0xf3bcc908), new int64(0xbb67ae85, 0x84caa73b),
        new int64(0x3c6ef372, 0xfe94f82b), new int64(0xa54ff53a, 0x5f1d36f1),
        new int64(0x510e527f, 0xade682d1), new int64(0x9b05688c, 0x2b3e6c1f),
        new int64(0x1f83d9ab, 0xfb41bd6b), new int64(0x5be0cd19, 0x137e2179)
    ];

    let K = [new int64(0x428a2f98, 0xd728ae22), new int64(0x71374491, 0x23ef65cd),
        new int64(0xb5c0fbcf, 0xec4d3b2f), new int64(0xe9b5dba5, 0x8189dbbc),
        new int64(0x3956c25b, 0xf348b538), new int64(0x59f111f1, 0xb605d019),
        new int64(0x923f82a4, 0xaf194f9b), new int64(0xab1c5ed5, 0xda6d8118),
        new int64(0xd807aa98, 0xa3030242), new int64(0x12835b01, 0x45706fbe),
        new int64(0x243185be, 0x4ee4b28c), new int64(0x550c7dc3, 0xd5ffb4e2),
        new int64(0x72be5d74, 0xf27b896f), new int64(0x80deb1fe, 0x3b1696b1),
        new int64(0x9bdc06a7, 0x25c71235), new int64(0xc19bf174, 0xcf692694),
        new int64(0xe49b69c1, 0x9ef14ad2), new int64(0xefbe4786, 0x384f25e3),
        new int64(0x0fc19dc6, 0x8b8cd5b5), new int64(0x240ca1cc, 0x77ac9c65),
        new int64(0x2de92c6f, 0x592b0275), new int64(0x4a7484aa, 0x6ea6e483),
        new int64(0x5cb0a9dc, 0xbd41fbd4), new int64(0x76f988da, 0x831153b5),
        new int64(0x983e5152, 0xee66dfab), new int64(0xa831c66d, 0x2db43210),
        new int64(0xb00327c8, 0x98fb213f), new int64(0xbf597fc7, 0xbeef0ee4),
        new int64(0xc6e00bf3, 0x3da88fc2), new int64(0xd5a79147, 0x930aa725),
        new int64(0x06ca6351, 0xe003826f), new int64(0x14292967, 0x0a0e6e70),
        new int64(0x27b70a85, 0x46d22ffc), new int64(0x2e1b2138, 0x5c26c926),
        new int64(0x4d2c6dfc, 0x5ac42aed), new int64(0x53380d13, 0x9d95b3df),
        new int64(0x650a7354, 0x8baf63de), new int64(0x766a0abb, 0x3c77b2a8),
        new int64(0x81c2c92e, 0x47edaee6), new int64(0x92722c85, 0x1482353b),
        new int64(0xa2bfe8a1, 0x4cf10364), new int64(0xa81a664b, 0xbc423001),
        new int64(0xc24b8b70, 0xd0f89791), new int64(0xc76c51a3, 0x0654be30),
        new int64(0xd192e819, 0xd6ef5218), new int64(0xd6990624, 0x5565a910),
        new int64(0xf40e3585, 0x5771202a), new int64(0x106aa070, 0x32bbd1b8),
        new int64(0x19a4c116, 0xb8d2d0c8), new int64(0x1e376c08, 0x5141ab53),
        new int64(0x2748774c, 0xdf8eeb99), new int64(0x34b0bcb5, 0xe19b48a8),
        new int64(0x391c0cb3, 0xc5c95a63), new int64(0x4ed8aa4a, 0xe3418acb),
        new int64(0x5b9cca4f, 0x7763e373), new int64(0x682e6ff3, 0xd6b2b8a3),
        new int64(0x748f82ee, 0x5defb2fc), new int64(0x78a5636f, 0x43172f60),
        new int64(0x84c87814, 0xa1f0ab72), new int64(0x8cc70208, 0x1a6439ec),
        new int64(0x90befffa, 0x23631e28), new int64(0xa4506ceb, 0xde82bde9),
        new int64(0xbef9a3f7, 0xb2c67915), new int64(0xc67178f2, 0xe372532b),
        new int64(0xca273ece, 0xea26619c), new int64(0xd186b8c7, 0x21c0c207),
        new int64(0xeada7dd6, 0xcde0eb1e), new int64(0xf57d4f7f, 0xee6ed178),
        new int64(0x06f067aa, 0x72176fba), new int64(0x0a637dc5, 0xa2c898a6),
        new int64(0x113f9804, 0xbef90dae), new int64(0x1b710b35, 0x131c471b),
        new int64(0x28db77f5, 0x23047d84), new int64(0x32caab7b, 0x40c72493),
        new int64(0x3c9ebe0a, 0x15c9bebc), new int64(0x431d67c4, 0x9c100d4c),
        new int64(0x4cc5d4be, 0xcb3e42b6), new int64(0x597f299c, 0xfc657e2a),
        new int64(0x5fcb6fab, 0x3ad6faec), new int64(0x6c44198c, 0x4a475817)
    ];

    let W = new Array(64);
    let a, b, c, d, e, f, g, h, i, j;
    let T1, T2;
    let charsize = 8;

    function utf8_encode(str) {
        return unescape(encodeURIComponent(str));
    }

    function str2binb(str) {
        let bin = [];
        let mask = (1 << charsize) - 1;
        let len = str.length * charsize;

        for (let i = 0; i < len; i += charsize) {
            bin[i >> 5] |= (str.charCodeAt(i / charsize) & mask) << (32 - charsize - (i % 32));
        }

        return bin;
    }

    function binb2hex(binarray) {
        let hex_tab = '0123456789abcdef';
        let str = '';
        let length = binarray.length * 4;
        let srcByte;

        for (let i = 0; i < length; i += 1) {
            srcByte = binarray[i >> 2] >> ((3 - (i % 4)) * 8);
            str += hex_tab.charAt((srcByte >> 4) & 0xF) + hex_tab.charAt(srcByte & 0xF);
        }

        return str;
    }

    function safe_add_2(x, y) {
        let lsw, msw, lowOrder, highOrder;

        lsw = (x.lowOrder & 0xFFFF) + (y.lowOrder & 0xFFFF);
        msw = (x.lowOrder >>> 16) + (y.lowOrder >>> 16) + (lsw >>> 16);
        lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

        lsw = (x.highOrder & 0xFFFF) + (y.highOrder & 0xFFFF) + (msw >>> 16);
        msw = (x.highOrder >>> 16) + (y.highOrder >>> 16) + (lsw >>> 16);
        highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

        return new int64(highOrder, lowOrder);
    }

    function safe_add_4(a, b, c, d) {
        let lsw, msw, lowOrder, highOrder;

        lsw = (a.lowOrder & 0xFFFF) + (b.lowOrder & 0xFFFF) + (c.lowOrder & 0xFFFF) + (d.lowOrder & 0xFFFF);
        msw = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) + (c.lowOrder >>> 16) + (d.lowOrder >>> 16) + (lsw >>> 16);
        lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

        lsw = (a.highOrder & 0xFFFF) + (b.highOrder & 0xFFFF) + (c.highOrder & 0xFFFF) + (d.highOrder & 0xFFFF) + (msw >>> 16);
        msw = (a.highOrder >>> 16) + (b.highOrder >>> 16) + (c.highOrder >>> 16) + (d.highOrder >>> 16) + (lsw >>> 16);
        highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

        return new int64(highOrder, lowOrder);
    }

    function safe_add_5(a, b, c, d, e) {
        let lsw, msw, lowOrder, highOrder;

        lsw = (a.lowOrder & 0xFFFF) + (b.lowOrder & 0xFFFF) + (c.lowOrder & 0xFFFF) + (d.lowOrder & 0xFFFF) + (e.lowOrder & 0xFFFF);
        msw = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) + (c.lowOrder >>> 16) + (d.lowOrder >>> 16) + (e.lowOrder >>> 16) + (lsw >>> 16);
        lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

        lsw = (a.highOrder & 0xFFFF) + (b.highOrder & 0xFFFF) + (c.highOrder & 0xFFFF) + (d.highOrder & 0xFFFF) + (e.highOrder & 0xFFFF) + (msw >>> 16);
        msw = (a.highOrder >>> 16) + (b.highOrder >>> 16) + (c.highOrder >>> 16) + (d.highOrder >>> 16) + (e.highOrder >>> 16) + (lsw >>> 16);
        highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

        return new int64(highOrder, lowOrder);
    }

    function maj(x, y, z) {
        return new int64(
            (x.highOrder & y.highOrder) ^ (x.highOrder & z.highOrder) ^ (y.highOrder & z.highOrder),
            (x.lowOrder & y.lowOrder) ^ (x.lowOrder & z.lowOrder) ^ (y.lowOrder & z.lowOrder)
        );
    }

    function ch(x, y, z) {
        return new int64(
            (x.highOrder & y.highOrder) ^ (~x.highOrder & z.highOrder),
            (x.lowOrder & y.lowOrder) ^ (~x.lowOrder & z.lowOrder)
        );
    }

    function rotr(x, n) {
        if (n <= 32) {
            return new int64(
                (x.highOrder >>> n) | (x.lowOrder << (32 - n)),
                (x.lowOrder >>> n) | (x.highOrder << (32 - n))
            );
        } else {
            return new int64(
                (x.lowOrder >>> n) | (x.highOrder << (32 - n)),
                (x.highOrder >>> n) | (x.lowOrder << (32 - n))
            );
        }
    }

    function sigma0(x) {
        let rotr28 = rotr(x, 28);
        let rotr34 = rotr(x, 34);
        let rotr39 = rotr(x, 39);

        return new int64(
            rotr28.highOrder ^ rotr34.highOrder ^ rotr39.highOrder,
            rotr28.lowOrder ^ rotr34.lowOrder ^ rotr39.lowOrder
        );
    }

    function sigma1(x) {
        let rotr14 = rotr(x, 14);
        let rotr18 = rotr(x, 18);
        let rotr41 = rotr(x, 41);

        return new int64(
            rotr14.highOrder ^ rotr18.highOrder ^ rotr41.highOrder,
            rotr14.lowOrder ^ rotr18.lowOrder ^ rotr41.lowOrder
        );
    }

    function gamma0(x) {
        let rotr1 = rotr(x, 1),
            rotr8 = rotr(x, 8),
            shr7 = shr(x, 7);

        return new int64(
            rotr1.highOrder ^ rotr8.highOrder ^ shr7.highOrder,
            rotr1.lowOrder ^ rotr8.lowOrder ^ shr7.lowOrder
        );
    }

    function gamma1(x) {
        let rotr19 = rotr(x, 19);
        let rotr61 = rotr(x, 61);
        let shr6 = shr(x, 6);

        return new int64(
            rotr19.highOrder ^ rotr61.highOrder ^ shr6.highOrder,
            rotr19.lowOrder ^ rotr61.lowOrder ^ shr6.lowOrder
        );
    }

    function shr(x, n) {
        if (n <= 32) {
            return new int64(
                x.highOrder >>> n,
                x.lowOrder >>> n | (x.highOrder << (32 - n))
            );
        } else {
            return new int64(
                0,
                x.highOrder << (32 - n)
            );
        }
    }

    str = utf8_encode(str);
    strlen = str.length * charsize;
    str = str2binb(str);

    str[strlen >> 5] |= 0x80 << (24 - strlen % 32);
    str[(((strlen + 128) >> 10) << 5) + 31] = strlen;

    for (let i = 0; i < str.length; i += 32) {
        a = H[0];
        b = H[1];
        c = H[2];
        d = H[3];
        e = H[4];
        f = H[5];
        g = H[6];
        h = H[7];

        for (let j = 0; j < 80; j++) {
            if (j < 16) {
                W[j] = new int64(str[j * 2 + i], str[j * 2 + i + 1]);
            } else {
                W[j] = safe_add_4(gamma1(W[j - 2]), W[j - 7], gamma0(W[j - 15]), W[j - 16]);
            }

            T1 = safe_add_5(h, sigma1(e), ch(e, f, g), K[j], W[j]);
            T2 = safe_add_2(sigma0(a), maj(a, b, c));
            h = g;
            g = f;
            f = e;
            e = safe_add_2(d, T1);
            d = c;
            c = b;
            b = a;
            a = safe_add_2(T1, T2);
        }

        H[0] = safe_add_2(a, H[0]);
        H[1] = safe_add_2(b, H[1]);
        H[2] = safe_add_2(c, H[2]);
        H[3] = safe_add_2(d, H[3]);
        H[4] = safe_add_2(e, H[4]);
        H[5] = safe_add_2(f, H[5]);
        H[6] = safe_add_2(g, H[6]);
        H[7] = safe_add_2(h, H[7]);
    }

    let binarray = [];
    for (let i = 0; i < H.length; i++) {
        binarray.push(H[i].highOrder);
        binarray.push(H[i].lowOrder);
    }
    return binb2hex(binarray);
}


console.log(MD5('secret'));
console.log(SHA1('secret'));
console.log(SHA256('secret'));
console.log(SHA512('secret'));