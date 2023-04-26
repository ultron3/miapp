export class social {
  homesocial() {
    //fecth instagram
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    } as RequestInit;

    fetch('https://www.instagram.com/', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));

    //fetch facebook

    var requestOption = {
      method: 'GET',
      redirect: 'follow',
    } as RequestInit;

    fetch('https://it-it.facebook.com/', requestOption)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
//fetch linkedin
    var myHeaders = new Headers();
    myHeaders.append(
      'Cookie',
      'bcookie="v=2&89e9994e-8725-476e-88df-8753477017f6"; lang=v=2&lang=it-it; li_gc=MTswOzE2ODI0OTUxMTg7MjswMjEwekUJtcyfA+Sal/OBG8Ip5pCjITCAyzoRHaFIhT5THw==; lidc="b=OGST06:s=O:r=O:a=O:p=O:g=2649:u=1:x=1:i=1682495118:t=1682581518:v=2:sig=AQE4TKW3SPTBX677Xq0omCYeGivUwNAq"; bscookie="v=1&2023042607451831b1cd47-e4cf-4290-8830-bf40cd9864dbAQFj8dBmsIa4Sc3hVcYIvLqWZt62v6P5"'
    );

    var requestcokie = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    } as RequestInit;

    fetch('https://www.linkedin.com/uas/login-submit?_l=it_IT', requestcokie)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }
}
