#!/usr/bin/env python3
"""typing project"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """return a function callable"""
    def a(n: float) -> float:
        """return the multiplication of two numbers"""
        return n * multiplier
    return a
