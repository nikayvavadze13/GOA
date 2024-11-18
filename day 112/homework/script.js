const fetchCryptoData = async (crypto) => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}`);
      const data = await response.json();
      renderCryptoData(data);
    } catch (error) {
      console.error("Error fetching crypto data:", error);
    }
  };