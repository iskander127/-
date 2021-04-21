package main

import (
	
	"fmt"
	//"strconv"
	//"strconv"
	"time"
)


var count int
//var tn = time.Now()
var srez [] string
 // + strconv.Itoa(time.Now),

func enterTime(mes1 string) int { // Задержка
	var sec int
	
	fmt.Println("Enter time", mes1)
	fmt.Scanf("%d\n", &sec)
	return sec

}

func svetofor(svet string, pause int) { // Вывод сообщений

	fmt.Println(svet)
	time.Sleep(time.Duration(pause) * (time.Second))
	m:= svet + time.Now().Format(time.RFC850)
	srez = append(srez, m)
}

func main() {

	mesGo := "GO"
	mesWait := "WAIT"
	mesStop := "STOP"

	t1 := enterTime(mesGo)
	t2 := enterTime(mesWait)
	t3 := enterTime(mesStop)

	for {

		svetofor(mesGo, t1)
		svetofor(mesWait, t2)
		svetofor(mesStop, t3)
		count++
		if count%5 == 0 {
		fmt.Println(srez)
		}

	}

}
