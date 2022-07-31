// boolean (true/false)
// 0


// 1. Khai báo

// let single = true;
// let bald = false;
// 2. Mệnh đề so sánh
// // Toán tử so sánh
// // >, <, >=, <=,==,!=
//  1 == 1 //true 
//  1 > 1 // false
//  1 >= 1 // true
//  1 != 1 // false
//  console.log( 1 == 1);
//  console.log(1 == "1");
//  console.log(1 === "1");

// console.log(1 != 1); //FALSE

// console.log("a" > "b"); //false
// console.log("ABC" > "ABA");//true
// console.log("ABC" > "ABc");// false vì chữ thường to hơn chữ hoa


// and(&&) , pr(||)
// 1 > 1 && 2 == 2 // flase (thiếu log)
// //(1 > 1 false)    (2 = 2 true)
// 1 > 1 || 2 == 2 // true ( thiếu log)


// Branching statements ( câu lệnh rẽ nhánh )



// 1--------------2--------------3------------
// condition1 : x < 1
// condition2 : x > 1 && x  < 2
// condition 3 : x > 2 && x < 3
// else : x =1 ,x = 2 , x >= 3 


// if(condition1){
//       // do something 1
// }else if (condition2){
//     // do somethihg 2
// }else if (conditiom3){
//     // do somemthing3
// }else {
//     // do something4
// }


// ex1:
// Cho người dùng nhập vào số n
// Kiểm tra xem đó là số chẵn hay lẻ và in kết quả 
// ra màn hình console

// ex2
// Cho người dùng nhập vào 2 số a và b
// kiểm tra xem số nào lớn hơn và in kết quả ra
// màn hình console

// ex3
// Cho người dùng nhập vào 3 số a, b, c
// Kiểm tra xem số nào là số lớn nhất (max) và in kết quả ra
// màn hình console
// ex4
//tương tự như ex3 nhưng là tìm số bé nhất (min)




// alert("Bây giờ bạn hãy nhập số và tôi sẽ cho ra kết quả là số chẵn hay số lẻ")
// let n =prompt("điền số")
// if (Number(n) % 2 === 0){ 
//     console.log("số chẵn")
// }
// else {
//     console.log(" số lẻ"); 
// };


// // bài 2
// alert(" hãy nhập số a và b để tôi xem số nào lớn hơn")
// let a =prompt(" hãy nhập vào số a")
// let b =prompt(" hãy nhập vào số b")
// if(Number(a) > Number(b)){
//     console.log("số a lớn hơn số b");
// }
// else {
//     console.log(" số a nhỏ hơn số b");
// }


// // bài 3
// alert(" 3 só a b c tôi sẽ tìm ra số lớn nhất")
// let c=prompt(" số c")
// if(Number(a) > Number(b) && Number(a) > Number(c)){
//     console.log(`${a} lớn nhất`);
// }
// else if(Number(b) > Number(a) && Number(b) > Number(c)){
//     console.log(`${b} lớn nhất`);
// }
// else {
//     console.log(`${c} lớn nhất`);
// }
// if (a<b && a<c){
//     console.log(" min "+a);
// }else if (b<a && b<c){
//     console.log(" min "+b);
// }else {
//     console.log(" min "+c);
// }







//Câu 5
// Viết một ứng dụng cho người dùng đăng nhập
// Vào chiều cao (m) và cân nặng (kg)
//Google bằng BMI
//Tính BMI và in ra kết quả cho người dùng

// let weight=prompt("cân nặng (kg)")
// let height=prompt("chiều cao (m)")
// let BMI = Number(weight) /Number(height * height);
// alert( `BMI=${BMI}`)
// console.log(`BMI=${BMI}`);





//ex6
//Cho người dùng nhập vào 3 số a,b,c
//Tìm nghiệm của phương trình bậc 2 ax^2 + bx + c = 0


// alert("giờ tìm nghiệm của ptr bậc 2 : ax^2 + bx + c = 0")
// let z =prompt("số a")
// let x =prompt("số b")
// let v =prompt("số c")
// let denta = x ** 2 - ( 4 * z * v )
// let kep = -x / ( 2 * z)
// let x1 = (-x + Math.sqrt(denta) ) / ( 2 * z )
// let x2 = (-x - Math.sqrt(denta) ) / ( 2 * z )
// if (Number(denta) < 0 ){
//     console.log(`vì đenta < 0 phương trình vô nghiệm`);
// }
// else if(Number(denta) === 0){
//     console.log(`Vì đenta = 0 lên phương trình có nghiệm kep ${kep}`);
// }
// else{
//     console.log(` Vì đenta > 0 lên phương trình có 2 nghiệm 
//     x1 = ${x1} 
//     x2 = ${x2}`);
// }



//Ex7
//Cho người dùng nhập vào tháng bất kì, xác định tháng
//đó thuộc mùa gì (Google search switch-case)

// let thang =prompt("hãy nhập tháng để tôi biết đó là mùa gì")
// if(1 <= Number(thang) &&  Number(thang) <= 3 ){
//     console.log(" mùa xuân");
// }
// else if( 3 < Number(thang) && Number(thang) <=6 ){
//     console.log("mùa hạ");
// }
// else if(6 < Number(thang) && Number(thang) <= 9){
//     console.log(" mùa thu");
// }
// else if(9 < Number(thang) && Number(thang) <= 12){
//     console.log("mùa đông");
// }
// else{ 
//     console.log(" Bịp nhau à");
// }
//  switch(Number(thang)){
//     case 1 :
//      case 2 :
//      case 3 :
//         console.log("mùa xuân");
//         break;
//     case 4 :
//      Case 5:
//      case 6 :
//         console.log("mùa hè");
//         break;
//      case 7  :
//      case 8 :
//      case 9 :
//         console.log("mùa thu");
//         break;
//     case 10 :
//     case  11 :
//      case 12 :
//         console.log("mùa đông");
//         break;
//         default :
//         console.log("bịp à");
//  }

// if(Number(thang) == 1) {

// } else if (Number(thang) == 2)


// 1 let var const

// 1. var let const : là để khai báo biến 
// 2. let là phạm vi trong 1 khối và phải theo thứ tự khai báo và nếu sd let trước khi khai báo thì sẽ gặp lỗi
//  var là phạm vi 1 hàm và được khai báo trên phạm vi toàn bài và nếu thêm hosting thì sẽ được đưa lên đầu bài
// 3. const khác let 
//let thì được gắn lại nhưng không được khai báo lại
//const thì không thể gắn lại giá trị cho nó cũng như không thể khai báo lại
// 4. Trường hớp sử dụng từ khóa :
// Đối với var : Nếu mình muốn khai báo biến trong phạm vi toàn bài
// Đối với let : Nếu mình muốn khai báo trong phạm vi 1 khối
// Đỗi với const : Khi mình đi code dự án




//2 
// 1 Kiểu dữ liệu Boolean thông thường được dùng để lưu trữ các giá trị đúng hoặc sai của một mệnh đề so sánh nào đó
// 2 true and false
//3 Toàn bộ các phép so sánh trong toán học đều có ở trong ngôn ngữ lập trình Javascript.
//vd :
//Bạn muốn lưu giá trị thời tiết vào một thời điểm nhất định
//Tại thời điểm đó chỉ có 2 trường hợp có thể xảy ra đó là có mưa hoặc không có mưa.
//Như vậy ta chỉ cần lưu 1 biến troiMua với kiểu boolean, với giá trị true là có mưa còn false là không có mưa.


































//1
// let half =prompt("Hãy nhập 1 số để tôi kiểm tra xem số đó nằm trong khoảng nửa bé hơn của [0 - 9] hay nửa lớn hơn của [0 - 9]");
// if(0 < Number(half) && Number(half) < 4.5){
//     console.log(`lower half of 9 `);
// }
// else if(4,5 <= Number(half) && Number(half) <= 9 ){
//     console.log(`Higher half of 9 `);
// }
// else if(Number(half) === 4.5){
//     console.log("nửa của 9");
// }
//2
// alert( "Hãy nhập vào số n và số x để tôi kiểm tra xem số x thuộc vào nửa nào của số n ");
// let n =prompt("n = ");
// let x =prompt("x =");
// let q = n/2
// if(0 < Number(x) && Number(x) < q ){
//     console.log(`${x} is lower half ${n}`);
// }
// else if(q < Number(x) && Number(x)< n){
//     console.log(`${x} is a higher of ${n}`);
// }
// else if(Number(x) === q){
//     console.log(`${x} là nửa của ${n}`);
// }


//3
// alert("Bây giờ bạn hãy nhập số và tôi sẽ cho ra kết quả là số chẵn hay số lẻ")
// let n =prompt("điền số")
// if (Number(n) % 2 === 0){ 
//     alert("số chẵn")
// }
// else {
//     alert(" số lẻ"); 
// };




//4 
// let weight =prompt(` điền cân nặng`);
// let height =prompt(` điền chiều cao`)
// let bmi = weight / (height * 2)
// if( bmi < 16 ){
//     console.log(` m là bộ xuong à`);
// }
// else if(16 <= bmi && bmi < 18.5){
//     console.log(` m là idol hàn xẻng à`);
// }
// else if( 18.5<= bmi && bmi < 25){
//     console.log(` m đz đấy`);
// }
// else if( 25 <= bmi && bmi <= 30 ){
//     console.log(` m béo quá rồi đấy`);
// }
// else{
//     console.log(` thôi ông không cần giảm nữa đâu`);
// }

//5 
// let hoa =prompt("hóa");
// let ly =prompt("lý");
// let sinh=prompt("sinh");
// let van =prompt("van");
// let anh=prompt("anh");
// let trungbinh = ( ( Number(hoa) + Number(sinh) + Number(anh) + Number(ly) + Number(van) ) / 5 ) 
// if(Number(trungbinh) >= 9 ){
//     console.log(`Grade A`);
// } 
// else if(Number(trungbinh) >= 8){
//     console.log(`grade B`);
// }
// else if( Number(trungbinh) >= 7){
//     console.log(`grade C`);
// }
// else if(Number(trungbinh) >= 6){
//     console.log(`grade D`);
// }
// else if(Number(trungbinh) >= 4){
//     console.log(`grade E`);
// }
// else{
//     console.log(`grade F`);
// }



//6 
// let nam =Number(prompt("hãy nhập năm ") );
// if( nam > 0 && nam % 1 === 0){
//     console.log(" hợp lệ ");
//    { if(nam % 4 === 0 || nam % 400 === 0 ){
//         console.log("la nam nhuận");
//    }
//     else{
//             console.log(` nam khong nhuan`);
//         }

// }
// }
// else {
//     console.log(" khong hop le ");
// }






//7
// let chieucao =Number(prompt("điền chiều cao của bạn (cm)"))
// if( chieucao < 150 ){
//     console.log(" m là người lùn à");
// }
// else if(150 <= chieucao && chieucao <= 169){
//     console.log(" 3đ");
// }
// else if( chieucao >= 170){
//     console.log(`được`);
// }



//8 
// let a =prompt(`số a`)
// let b =prompt(` số b`)
// if(a > b){
//     console.log(`a lớn hơn`);
// }
// else {
//     console.log(`b lớn hơn`);
// }

//9
// alert(` hãy nhập 2 số a và b để có phép tính a__b `);
// let a =Number(prompt(" số a"));
// let b =Number(prompt(` số b`));
// let h =(prompt(`a___b dùng phép tính + - * / % **`));
// let cong = a + b
// let tru = a - b
// let nhan = a * b
// let chia = a / b
// let du = a % b
// let mu = a ** b 
// switch(h){
//     case "+" :
//         console.log(cong);
//         break;
//     case "-" :
//         console.log(tru);
//         break;
//     case "*":
//         console.log(nhan);
//         break;
//     case "/":
//         console.log(chia);
//         break;
//     case "%":
//         console.log(du);
//         break;
//     case "**":
//         console.log(mu);
//         break;
// }





//10
// alert(` bạn hãy nhập 3 số a b c để tôi kiểm tra xem số nào max và số nào min`);
// let a =prompt(`hẫy nhập só a`);
// let b =prompt(`hãy nhập số b`);
// let c =prompt(`hãy nhập  số c`);
// if(a < b && a < c){
//     console.log(` min là ${a}`);
// }
// else if( b < a && b < c){
//     console.log(` min lf ${b}`);
// }
// else{
//     console.log(` min là ${c}`);
// }
// if(a > b && a > c){
//     console.log(` max là ${a}`);
// }
// else if( b > a && b > c){
//     console.log(` max là ${b}`);
// }
// else{
//     console.log(` max là ${c}`);
// }




// 11
// alert(` Hãy vào số a để tôi xem đó có phải số chính phương hay không`);
// let a =Number(prompt(` hãy nhập số a`));
// let chinhphuong = Math.sqrt(a);
// if( chinhphuong > 0 && chinhphuong % 1 === 0 ){
//     console.log(`${a} là số chính phương`);
// }
// else{
//     console.log(`${a} không là số chính phương`);
// }



// 12
// alert(` Bạn hãy nhập ngày và tháng để tôi xem bạn thuộc cung gì`);
// let a =Number(prompt(` Hãy nhập ngày sinh`));
// let b =Number(prompt(` Hãy nhập tháng sinh`));
// switch (true) {
//     case ( a >= 19 && b == 2) || ( b == 3 && a <= 20):
//         console.log(` Bạn thuộc cung Song Ngư `);
//         break;
//     case ( a >= 21 && b == 3 ) || ( b == 4 && a <= 19 ):
//         console.log(` Bạn thuộc cung Bạch Dương `);
//         break;
//     case ( a >= 20 && b === 4) || ( a <= 20 && b === 5):
//         console.log(` Bạn thuộc cung Kim ngưu`);
//         break;
//     case ( a >= 21 && b === 5) || ( a <= 21 && b == 6) :
//         console.log(` Bạn thuộc cung Song Tử`);
//         break;
//     case ( a >= 22 && b == 6 ) || ( a <= 22 && b == 7):
//         console.log(` Bạn thuộc cung Cự Giải`);
//         break;
//     case ( a >= 23 && b == 7 ) || ( a <= 22 && b ==8 ):
//         console.log(` Bạn thuộc cung Sử Tử`);
//         break;
//     case ( a >= 23 && b == 8) || ( a <= 22 && b == 9):
//         console.log(`Bạn thuộc cung Xử Nữ`);
//         break;
//     case ( a >= 23 && b == 10 ) || ( a <= 23 && b == 10):
//         console.log(`Bạn thuộc cung Thiên Bình`);
//         break;
//     case ( a >= 24 && b == 10 ) || ( a <= 21 && b ==11 ):
//         console.log(`Bạn thuộc cung Hổ Cáp`);
//         break;
//     case ( a >= 22 && b == 11 ) || ( a <= 21 && b == 12):
//         console.log(`Bạn thuộc cung Nhân Mã`);
//         break;
//     case ( a >= 22 && b ==12 ) || ( a <= 19 && b == 1):
//         console.log(`Bạn thuộc cung M<a Kết`);
//         break;
//     case ( a >= 20 && b ==1 ) || ( a <= 18 && b == 2):
//         console.log(`Bạn thuộc cung Bảo Bình`);
//         break;
// }






//13 
// alert(` Hẫy nhập 3 số a b c để tìm nghiệm ptr bậc 2 : ax**2 + bx + c = 0 (a !== 0)`)
// let a =prompt( ` số a`)
// let b =prompt(` số b`)
// let c =prompt(` số c`)
// let denta = b ** 2 - 4 * a * c
// let can = Math.sqrt(denta)
// if ( denta < 0 ){
//     console.log((` phương trình vô nghiệm`));
// } 
// else if( denta = 0 ){
//     console.log(` phương trình có nghiệm kép x1 = x 2 = ${- b / (2 * a)}`);
// }
// else{
//     console.log(` phương trình có 2 nghiệm  x1 = ${(- b + can) / (2 * a) } x2 = ${(- b - can) / (2 * a)}`);
// }


// 14
// alert( ` Hãy nhập 3 số a b c để tôi kiểm tra xem có phải 1 tam giác hay không`);
// let a =prompt(` a = `);
// let b =prompt(` b = `);
// let c =prompt( `c =`);
// let tong1 = a ** 2 + b ** 2
// let tong2 = a ** 2 + c ** 2 
// let tong3 = b ** 2 + c ** 2
// if( a > 0 && b > 0 && c > 0 ){
//     if( a == b && b == c ){
//         console.log(` Tam giác đều`);
//     }
//     else if( a == b || b == c || a == c){
//         console.log(` Tam giác cân`);
//     }
//     else if ( tong1 === c ** 2 || tong2 === b ** 2 || tong3 === a ** 2){
//         if( a == b || b == c || a == c ){
//             console.log(` Tam giác vuông cân`);
//         }
//         else{
//             console.log(` Tam giác vuông`);
//         }
//     }
//     else if( a + b > c || a + c > b || b + c > a){
//         console.log(` Tam giác thường`);
//     }
// }
// else{
//     console.log(` Hình gì ý không phải tam giác`);
// }

























