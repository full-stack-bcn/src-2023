import 'package:demo2/screens/home_screen.dart';
import 'package:demo2/screens/light_bulb_screen.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return FittedBox(
      child: SizedBox(
        width: 360,
        height: 640,
        child: MaterialApp(
          debugShowCheckedModeBanner: false,
          routes: {
            '/': (context) => const HomeScreen(),
            '/light-bulb': (context) => const LightBulbScreen(),
          },
        ),
      ),
    );
  }
}
