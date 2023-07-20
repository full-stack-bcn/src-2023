import 'package:flutter/material.dart';

class LightBulb extends StatefulWidget {
  const LightBulb({super.key});

  @override
  State<StatefulWidget> createState() => _LightBulbState();
}

class _LightBulbState extends State<LightBulb> {
  bool isOn = false;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        debugPrint("onTap");
        setState(() {
          isOn = !isOn;
        });
      },
      child: Image.asset(
        isOn ? "assets/light-bulb-on.png" : "assets/light-bulb-off.png",
        width: 100,
        height: 180,
      ),
    );
  }
}
