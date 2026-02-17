#!/usr/bin/env python3
"""typing project"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """sum the values of a list with different types of elements"""
    return sum(mxd_lst)
