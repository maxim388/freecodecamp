function booWho(bool) {
    if (bool) {
        return bool === true;
    }
    return bool === false;
}

booWho(null);