import { Readable, Writable } from 'node:stream';


class OneToHundredStream extends Readable {
    index = 1;
    _read(){
        const i = this.index++;
        if(i > 100){
            this.push(null);
        } else {
            const buf = Buffer.from(String(i))
            this.push(buf);
        }
    }
}

class MultiplyByTenStream extends Writable {
    _write(chunk, encoding, callback){
        const number = parseInt(chunk.toString());
        const result = number * 10;
        console.log(result);
        callback();
    }
}

new OneToHundredStream().pipe(process.stdout);