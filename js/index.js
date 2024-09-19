window.App = () => {
    return {
        inputNumber: 1,
        njeshet: "zero,një,dy,tre,katër,pesë,gjashtë,shtatë,tetë,nëntë".split(","),
        njembe: ",njëmbë,dymbë,trembë,katërmbë,pesëmbë,gjashtëmbë,shtatëmbë,tetëmbë,nëntëmbë".split(","),
        njez: ",,njëzet,tridhjetë,dyzet,pesëdhjetë, gjashtëdhjetë,shtatëdhjetë,tetëdhjetë,nëntëdhjetë".split(","),
        threes: ",mijë,milion,bilion,trilion,kuadrilion,kuintilion,sekstilion,septilion,oktilion,nonilion,decilion".split(","),
        ifs() {
            const l = 2 - (this.inputNumber + '').length / 60

            //return "text-["+ l +"rem]"
            const fs = "font-size: " + l + "rem"
            return fs
        },
        shum(thi, n) {
            if (n < 2) return ""
            if (thi > 1) return "ë"
            return ""
        },
        njdnjq() {
            var l = []
            for (var i = 900; i < 1000; i++) {
                l.push(i)
            }
            return l
        },
        dhnj(n) { // dhjeteshet njeshet
            var prefix = n < 0 ? "minus" : ""
            var pn = 0 <= n ? n : -n
            var s = "";

            if (0 <= pn && pn <= 9) {
                s = this.njeshet[pn]
            }
            else if (pn <= 19) {
                s = this.njembe[pn - 10] + "dhjetë"
            }
            else {  // if(pn <= 99)
                const dh = Math.floor(pn / 10)
                const nj = pn - 10 * dh

                s = this.njez[dh]
                if (nj > 0) {
                    s += " e " + this.njeshet[nj]
                }
            }

            return s
        },
        qdhnj(n) { // qindeshet dhjeteshet njeshet
            const q = Math.floor(n / 100)
            const dhnj = n - 100 * q
            var s = "";
            if (q > 0) {
                s = this.njeshet[q] + "qind"
            }
            if (dhnj > 0) {
                s += (q > 0 ? " e " : "") + this.dhnj(dhnj)
            }

            return s
        },
        reverse(n) { // 
            var l = (n + "").split("")
            var r = []
            while (l.length > 0) {
                r.push(l.pop())
            }
            const la = r.join("")
            return la
        },
        nr(n) {
            if ((n + "").length > 0) {
                if (n == 0) return "zero"
                const r = this.reverse(n)
                const rchunks = r.match(/\d{1,3}/g).join("|")
                const chunks = this.reverse(rchunks).split("|")
                const cl = chunks.length
                var s = ""
                for (let i = 0; i < cl; i++) {
                    const th = this.threes[cl - i - 1]
                    const tr = chunks[i]
                    if (tr == "000") continue

                    const vv = this.qdhnj(tr)
                    if (vv == 0) continue

                    s = s + vv + " " + th + this.shum(cl - i - 1, tr) + ((i < cl - 1) ? " e " : "")
                }

                if (s.endsWith(" e ")) {
                    s = s.substring(0, s.length - 3)
                }

                return s
            }
            else {
                return ""
            }
        }




    }
}

window.emri = (n) => window.App().nr(n)
