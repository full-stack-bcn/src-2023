import 'package:flutter/material.dart';

void main() {
  runApp(
    MyApp(),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.black,
        body: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              "hola que tal " * 3,
              style: const TextStyle(
                backgroundColor: Colors.pink,
                fontSize: 40,
                color: Colors.white,
                decoration: TextDecoration.underline,
                decorationColor: Colors.green,
                decorationThickness: 2,
              ),
            ),
            const SizedBox(height: 10),
            Container(
              width: 300,
              height: 200,
              color: Colors.blue,
            ),
            Align(
              alignment: Alignment.centerRight,
              child: Icon(
                Icons.delete,
                size: 80,
                color: Colors.white,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
