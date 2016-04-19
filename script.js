function goTo(){
  var query=document.getElementById('searchBox').value;
  query = query.replace(/[&]/g,'%26');
  query = query.replace(/[#]/g,'%23');
  query = query.replace(/[+]/g,'%2B');
  query = query.replace(/[;]/g,'%3B');
  var url="https://duckduckgo.com/?q=";
  window.location.href = url + query;
  return false;
}
