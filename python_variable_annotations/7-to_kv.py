#!/usr/bin/env python3
"""typing project"""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """pass an union in typing"""
    return k, v ** 2
