function getDomainName(url) {
    let domain = url.replace(/(https?:\/\/)?(www\.)?/, "");
    
    domain = domain.split(".")[0];
  
    return domain;
  }

  console.log(getDomainName("http://github.com/carbonfive/raygun")); 
  console.log(getDomainName("http://www.zombie-bites.com"));         
  console.log(getDomainName("https://www.cnet.com"));                
  