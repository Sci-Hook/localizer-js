# Araç Hakkında Genel Bilgilendirme

Araç, uygulamalarınıza dil desteği sağlamaya yardımcı olmaktadır. Verdiği JSON çıktısı sayesinde bütün projelerinizde kullanmanız mümkündür. Şu anlık sadece CLI desteklemektedir. Araç, Sci-Hook sistemlerine dil desteği sağlamak amacıyla kullanılmakta ve Sci-Hook Geliştirme Ekibi tarafından düzenli olarak güncellenmektedir.

# Araç Nasıl Kurulur?

Paketi npm aracılığı ile doğrudan proje klasörünüze kurmanız mümkündür. Bunun için projenizi çalıştırdığınız terminale gelip aşağıdaki npm yükleme komutunu çalıştırmalısınız:

`$ npm install localizer-js`

Komutu çalıştırdıktan sonra paketin son sürümü, otomatik olarak "node_modules" klasörüne inmeye başlayacaktır. Lütfen npm servisi işlemi tamamlayana kadar bekleyiniz.

# Araç Nasıl Kullanılır?

Araç, kullanımı oldukça kolay ve hızlı olacak şekilde geliştirilmiştir. Komut satırına `localize` yazarak kullanmaya başlayabilirsiniz.

`$ localize compile`

Yukarıda belirtilen komut ile verilmiş olan girdilerin tek bir dosya olarak derlenmesi sağlanır. Komut, `--config` veya `-c` olarak belirtilen bir parametre almaktadır. Aşağıda buna bir örnek verilmiştir:

`$ localize compile --config config.json`

Yukarıda gördüğünüz komut, `--config` parametresinde belirtilen `config.json` dosyasından aldığı bilgiler ile derleme işlemini gerçekleştirir.

### config.json

```json
{
    "langs": [
        "en",
        "tr"
    ],
    "input-dir": "i18n",
    "output-file": "output.json",
    "files": {
        "messages": "messages",
        "text": "text"
    },
    "global": true
}
```

Yukarıda bir konfigrasyon örneği verilmiştir.

| Seçenekler | Açıklama                 |
| ------------- | ------------------------------ |
| `langs`      | Çıktı olarak istenen dillerin listesidir.      |
| `input-dir`   | Sisteme girdi olarak verilen değerlerin bulunduğu dosyadır.     |
| `output-file`   | Sistemin derlenmiş halde çıktı verdiği dosyadır.     |
| `global`   | Tüm diller için ortak olarak atanmış değerlerdir.     |

Aşağıda `input-dir` için oluşturulmuş bir dosya yapısının örnek görüntüsü verilmiştir:

![](https://raw.githubusercontent.com/Sci-Hook/localizer-js/main/.github/images/example-image-1.png)

Yukarıda `files` içerisinde belirtilen `messages` ve `text` için birer klasör oluşturulmuştur ve her dil için birer JSON dosyası, klasörlerin içine eklenmiştir.

`en.json` ve `tr.json` dosyalarına aşağıdaki şekilde değerler atanmıştır:

### en.json

```json
{
    "test": "hello"
}
```

### tr.json

```json
{
    "test": "merhaba"
}
```

## Çıktı Alma

`$ localize compile --config config.json`

Yukarıdaki komudu çalıştırdığınızda `config.json` içerisinde belirtilmiş olan `output-file` seçeneğinde belirtilen JSON dosyası içerisine çıktı verilir. Çıktı aşağıdaki gibi gözükmektedir:

### output.json

```json
{
    "en": {
        "text": {
            "test": "hello"
        }
    },
    "tr": {
        "text": {
            "test": "merhaba"
        }
    }
}
```

# Katkı Sağlayanlar

Bu yazılım paketi, Sci-Hook Organizasyonu tarafından geliştirilmekte ve sunulmaktadır. Aktif olarak [Emirhan Gerçeker](https://github.com/lim10tech) tarafından geliştirilmektedir.

# Lisans

Bu paket [MIT Lisansı](https://github.com/Sci-Hook/language-accepter/blob/main/LICENSE) altında açık kaynak olarak sunulmuştur. Geliştirmelere, değişiklik yapmaya ve özgür kullanıma açıktır. Kişisel veya organizasyon projelerinizde paketten faydalanabilirsiniz, herhangi bir yerden izin almanız gerekmez. Geliştirenlere ve Sci-Hook'a atıfta bulunmanız bizi çok mutlu edecektir ancak yasal olarak gerekli değildir.
