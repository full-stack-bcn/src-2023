import 'package:flutter/material.dart';

class MyActionChip extends StatelessWidget {
  final String texto;
  final Color color;
  final IconData icon;
  const MyActionChip({
    super.key,
    required this.texto,
    this.color = Colors.blue,
    this.icon = Icons.add,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        debugPrint('Has clicao "$texto"');
      },
      child: Container(
        decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(100),
        ),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
          child: Row(
            children: [
              Icon(icon, color: Colors.white),
              const SizedBox(width: 5),
              Text(
                texto,
                style: const TextStyle(fontSize: 18, color: Colors.white),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
