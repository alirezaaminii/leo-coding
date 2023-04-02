export const API_KEY = '8cac6dec66e09ab439c081b251304443'
export const ENDPOINT = 'https://api.themoviedb.org/3'
// CODE REVIEW: From line 1 to 2
// How about placing these kind of constants about environment in .env files?
// it'll keep them safe and also we can change them in git repo without changing a line in code
export const ENDPOINT_DISCOVER = ENDPOINT+'/discover/movie/?api_key='+API_KEY+'&sort_by=vote_count.desc'
export const ENDPOINT_SEARCH = ENDPOINT+'/search/movie/?api_key='+API_KEY
export const ENDPOINT_MOVIE = ENDPOINT+'/movie/507086?api_key='+API_KEY+'&append_to_response=videos'