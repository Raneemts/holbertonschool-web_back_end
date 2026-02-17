#!/usr/bin/env python3
"""typing project"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """verify all basics elements of typing"""
    return [(i, len(i)) for i in lst]
