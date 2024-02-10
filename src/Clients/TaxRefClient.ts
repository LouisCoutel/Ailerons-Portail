import 'traverson'



class TaxRefClient {
    _options = {
        "accept": 'application/hal+json;version=1'
    }

    private mkurlFuzzyMatch(query: string) {
        const encodedQuery: string = encodeURI(query)
        return `/taxref/taxa/fuzzyMatch?term=${encodedQuery}`
    }

    async getFuzzyMatch(query: string) {
        const response = await fetch(this.mkurlFuzzyMatch(query))
        return 
    }
}