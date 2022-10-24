const distance = (a, b) => {
	//TODO: implementați funcția
	// TODO: implement the function
	if (typeof(a) != "string" || typeof(b) != "string")
	{
		// throw exception
		throw new Error('InvalidType');
	}
	else
	{
		if (a.length == 0) 
		{
			return b.length;
		}
		if (b.length == 0) 
		{
			return a.length;
		}
		const v = [];
		for (var i = 0; i <= b.length; i++) {
			v[i] = [i];
			for (var j = 1; j <= a.length; j++) 
			{
				if (i === 0)
				{
					v[i][j] = j;
				}
				else
				{
					var pot_min;
					if (a[j - 1] === b[i - 1])
					{
						pot_min = v[i - 1][j - 1];
					}
					else
					{
						pot_min = v[i - 1][j - 1] + 1;
					}

					v[i][j] = Math.min(v[i - 1][j] + 1, v[i][j - 1] + 1, pot_min);
				}
    		}
  		}
  		return v[b.length][a.length];
	}
}


module.exports.distance = distance