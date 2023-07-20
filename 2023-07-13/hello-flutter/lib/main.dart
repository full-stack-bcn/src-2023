import 'package:flutter/material.dart';
import 'package:hello/components/my_action_chip.dart';
import 'package:hello/components/number_circle.dart';

void main() {
  runApp(
    const MyApp(),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.black,
        body: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Padding(
              padding: EdgeInsets.all(24.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  NumberCircle(number: 1, color: Colors.blue),
                  NumberCircle(number: 2, color: Colors.green),
                  NumberCircle(number: 3, color: Colors.red),
                ],
              ),
            ),
            Row(
              children: [
                MyActionChip(texto: "Add friend"),
                MyActionChip(
                  texto: "Delete",
                  color: Colors.red,
                  icon: Icons.remove,
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}
