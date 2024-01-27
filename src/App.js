import './styles.css'

import noCharacter from './utilities/noCharacter'
import Character from './components/Character'
import StatusBars from './components/StatusBars'
import Options from './components/Options'
import Button from './components/Button'
import attackOptionsList from './data/attackOptionsList'
import namesList from './data/namesList'
import { useState } from 'react'

export default function App() {


  /* Challenge

    Bu video oyunu karakter yaratıcısının bir başlangıç karakterine ihtiyacı var. Göreviniz aşağıdakileri yaparak bir tane oluşturmak: 
    
        1. characterData adında bir state ve setCharacterData adında bir state ayarlama fonksiyonu tanımlayın. 
           
        2. İlk characterData state değerinin aşağıdaki özelliklere ve değerlere sahip bir nesne olmasını sağlayın.
           
        		Özellik		 	       Değerler  				  
			╷---------------╷------------------------------------╷					
		  | hat           |	true veya false                    |
			|---------------|------------------------------------|
			| shield        |	true veya false                    |
			|---------------|------------------------------------|
      | weapon        |	"sword" (kılıç) veya "staff" (asa) string	 |
			|---------------|------------------------------------|
      | name          |	Karakterin ismi olan bir string    | 
			|---------------|------------------------------------|
			| attackOptions |	Altı string'den oluşan bir array, her biri bir saldırı adıdır |
      |---------------|------------------------------------|
			| stats         |	Üç özelliğe sahip bir nesne:       |
      |	              |      - hp: x                       |
      |               |     - mp: y                        |
      |               |     - strength: z                  |
			¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯ 	
            
               * Kendi karakter adınızı ve saldırı seçeneklerinizi yazabilir veya bu dosyaya zaten aktarılmış olan namesList ve attackOptionsList dizilerindekileri kullanabilirsiniz.
                  
                ** İstatistikler için x, y ve z 0 ile 100 (dahil) arasında herhangi bir sayı olmalıdır.
                
        3. Kodunuzu çalıştırdığınızda karakterinizin belirttiğiniz özellik değerleriyle ekranda göründüğünü görmelisiniz. Kodunuzu, characterData özellik değerlerinden bazılarını manuel olarak değiştirerek ve doğru sonuçları alıp almadığınızı görerek test etmelisiniz. Ayrıca, state ayarlama fonksiyonunu kullanarak değerleri rastgele değiştirecek olan "Değiştir" butonuna da tıklamalısınız
    */

const [characterData, setCharacterData] = useState({
  hat: true,
  shield:true,
  weapon:"sword",
  name:namesList[0],
  attackOptions:[attackOptionsList[0], attackOptionsList[1], attackOptionsList[2], attackOptionsList[3], attackOptionsList[4], attackOptionsList[5]],
  stats:{
    hp:13,
    mp:5,
    strength:93
  }
})

  let dataToUse, functionToUse

  try {
    if (characterData) {
      dataToUse = characterData
    }
  } catch {
    dataToUse = noCharacter.noData
  }

  try {
    if (setCharacterData) {
      functionToUse = setCharacterData
    }
  } catch {
    functionToUse = noCharacter.noFunction
  }

  return (
    <div className='wrapper'>
      <StatusBars characterData={dataToUse} />

      <Character characterData={dataToUse} />

      <Options characterData={dataToUse} />

      <Button setCharacterData={functionToUse} />
    </div>
  )
}
