var db = `Ban_Dien_thoai`
var objStore = ``
var dbPromise

function Tao_Co_so_Du_lieu_indexedDB() {
    dbPromise = idb.open(db, 1, upgradeDB => {
        upgradeDB.createObjectStore(objStore);
    });
}



function Tao_Du_lieu_indexedDB(Du_lieu) {
    Du_lieu.forEach(San_pham => {
        idbProducts.set(San_pham.MaSo, San_pham)
    })
}





const idbProducts = {
    get(key) {
        return dbPromise.then(db => {
            return db.transaction(objStore)
                .objectStore(objStore).get(key);
        });
    },
    set(key, val) {
        return dbPromise.then(db => {
            const tx = db.transaction(objStore, 'readwrite');
            tx.objectStore(objStore).put(val, key);
            return tx.complete;
        });
    },
    delete(key) {
        return dbPromise.then(db => {
            const tx = db.transaction(objStore, 'readwrite');
            tx.objectStore(objStore).delete(key);
            return tx.complete;
        });
    },
    clear() {
        return dbPromise.then(db => {
            const tx = db.transaction(objStore, 'readwrite');
            tx.objectStore(objStore).clear();
            return tx.complete;
        });
    },
    keys() {
        return dbPromise.then(db => {
            const tx = db.transaction(objStore);
            const keys = [];
            const store = tx.objectStore(objStore);
            // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
            // openKeyCursor isn't supported by Safari, so we fall back
            (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
                if (!cursor) return;
                keys.push(cursor.key);
                cursor.continue();
            });

            return tx.complete.then(() => keys);
        });
    },
    getAll() {
        return dbPromise.then(db => {
            var tx = db.transaction(objStore, 'readonly');
            var store = tx.objectStore(objStore);
            return store.getAll();
        });
    },
    getAllType(objStore) {
        return dbPromise.then(db => {
            var tx = db.transaction(objStore, 'readonly');
            var store = tx.objectStore(objStore);
            return store.getAllType();
        });
    }
};



