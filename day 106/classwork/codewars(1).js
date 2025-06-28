function matchMyHusband(usefulness, monthsSinceSignUp) {
    const husbandUsefulness = usefulness.reduce((sum, ability) => sum + ability, 0);
    const initialNeeds = 100;
    const decayRate = 0.15; 
    const currentNeeds = initialNeeds * Math.pow(1 - decayRate, monthsSinceSignUp);
    return husbandUsefulness >= currentNeeds ? "Match!" : "No match!";
  }
  
  