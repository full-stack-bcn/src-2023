import 'package:demo2/components/light_bulb.dart';
import 'package:flutter/material.dart';

class LightBulbScreen extends StatelessWidget {
  const LightBulbScreen({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Stack(
        children: [
          Center(
            child: LightBulb(),
          ),
          Padding(
            padding: EdgeInsets.all(8.0),
            child: BackButton(),
          ),
        ],
      ),
    );
  }
}
